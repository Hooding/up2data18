import { Component, OnInit } from '@angular/core';
import { LatLng } from '@agm/core';
// import { BusinessService } from '../services/business.service';
// import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  ownerId = '';

    lat: number = 31.255889;
  lng: number = 34.799708;
  zoom = 16;
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
        { lat: 31.258889, lng: 34.799708 }, { lat:31.258500, lng: 34.799708 }, { lat:31.258500, lng: 34.799300 }, { lat: 31.258889, lng: 34.799300 }
     ]
 }, 
 {
  isClaimed: false,
  points: [
     { lat: 31.255889, lng: 34.799708 }, { lat:31.255500, lng: 34.799708 }, { lat:31.255500, lng: 34.799300 }, { lat: 31.255889, lng: 34.799300 }
  ]
 }

];

hideStats = true;
hideEdit = true;
  // constructor(public service: BusinessService) { }

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
      // this.service.claimBusiness(this.ownerId, polygon._id)
      //   .subscribe(data => {
            polygon.isClaimed = true;
        // });
    } else {
      // this.service.declaimBusiness(this.ownerId, polygon._id)
      //   .subscribe(data => {
          polygon.isClaimed = false;
        // });
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

  hideStatsDiv() {
    this.hideStats = true;
  }

  showStatsDiv() {
    this.hideStats = false;
  }

  hideEditDiv() {
    this.hideEdit = true;
  }

  showEditDiv() {
    this.hideEdit = false;
  }
}
