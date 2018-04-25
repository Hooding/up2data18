import { Component, OnInit } from '@angular/core';
import { LatLng } from '@agm/core';
import { BusinessService } from '../services/business.service';
// import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  ownerId = '';

    lat: number = 51.678418;
  lng: number = 7.809007;
  zoom = 15;
  styles = [
    {
      featureType: "poi",
      stylers: [
       { visibility: "off" }
      ]   
     }
 ];
 isOpen: Boolean;
 selectedPoint;

 polygons:any = [{
     isClaimed: false,
     points: [
        { lat: 51.678418, lng: 7.809007 }, { lat: 51.68419, lng: 7.9 }, { lat: 51.66842, lng: 7.8 } 
     ]
 }];

  constructor(public service: BusinessService) { }

  ngOnInit() {
    // this.service.getBusinesses(this.ownerId)
    //   .subscribe(data => {
    //     this.polygons = data;
    //   });
  }

  polyClicked(polygon, window) {
      if (this.isOpen) {
          this.isOpen = false;
    } else {
        this.isOpen = Object.assign({}, window.isOpen);
        this.selectedPoint = this.getPolygonCenter(polygon.points);
      }
  }

  claimOnClick(polygon) {
    if (!polygon.isClaimed) {
      this.service.claimBusiness(this.ownerId, polygon._id)
        .subscribe(data => {
            polygon.isClaimed = true;
        });
    } else {
      this.service.declaimBusiness(this.ownerId, polygon._id)
        .subscribe(data => {
          polygon.isClaimed = false;
        });
    }
  }

  renderClaimed(polygon) {
    return polygon.isClaimed ? 'green' : 'black';
  }

  private getPolygonCenter(points) {
      const lngs = points.map(elem => elem.lng);
      const lats = points.map(elem => elem.lat);

      return {
        lng: (Math.min(...lngs) + Math.max(...lngs)) / 2,
        lat: (Math.min(...lats) + Math.max(...lats)) / 2
      };
  }
}
