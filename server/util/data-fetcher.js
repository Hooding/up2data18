const axios = require('axios');

const logger = require('./logger');

const Business = require('../model/business/business.model');

let timestamp;

module.exports.fetch = () => {
    const fnName = 'event-fetcher:fetch';

    axios.get('http://opendata.br7.org.il/datasets/geojson/buildings.geojson')
        .then(response => {
            // console.log(response.data.features.filter(feature => feature.properties.Used === 'מסחרי')[0]);
                const docs = response.data.features.filter(feature => feature.properties.Used === 'מסחרי')
                    .map(feature => { 
                        return {
                            name: feature.properties.Name,
                            properties: feature.properties,
                            geometry: feature.geometry,
                            geoId: generateGeoId(feature.geometry)
                        };
                    }
                );
                // console.log(docs[0]);
                Business.insertMany(docs, { ordered: false }, (err, res) => {
                    // if (err) {
                        // console.error(err);
                    // } else {
                        // console.log(res);
                    // }
                });
        })
        .catch(error => logger.error('SCHEDULE', fnName, error));
}

function generateGeoId(geometry) {
    return geometry.coordinates.map(elem => {
        let str = '';
        for (let i = 0; i < elem.length; i++) {
            str += `${elem[1]},`;
        } 
        return str;
    })[0];
}