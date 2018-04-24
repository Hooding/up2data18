const axios = require('axios');

const xmlParser = require('@rgrove/parse-xml');

const logger = require('./logger');

const Event = require('../model/event/event.model');

let timestamp;

module.exports.fetch = () => {
    // const fnName = 'event-fetcher:fetch';

    // axios.get('http://www1.haifa.muni.il/simona/eruim.xml')
    //     .then(response => {
    //         const root = xmlParser(response.data).children[0];
    //         const events = root.children.filter(child => child.type === 'element');
    //         logger.info('SERVER', fnName, `${events.length} events fetched successfully`);
    //         if (!timestamp || timestamp !== root.attributes.generated) {
    //             timestamp = root.attributes.generated;
    //             saveToDb(events);
    //         }
    //     })
    //     .catch(error => logger.error('SCHEDULE', fnName, error));
}

function saveToDb(events) { // TODO
    // Event.insertMany(cleanseAndBuild(events));
    cleanseAndBuild(events);
}

function cleanseAndBuild(events) { // TODO
}