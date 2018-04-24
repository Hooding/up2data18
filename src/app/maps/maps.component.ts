import { Component, OnInit } from '@angular/core';
import { LatLng } from '@agm/core';
// import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
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

 polygons = [{
     isClaimed: false,
     points: [
        { lat: 51.678418, lng: 7.809007 }, { lat: 51.68419, lng: 7.9 }, { lat: 51.66842, lng: 7.8 } 
     ]
 }];

//   constructor(public dialog: MatDialog) { }

  ngOnInit() {

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
    polygon.isClaimed = true;
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
