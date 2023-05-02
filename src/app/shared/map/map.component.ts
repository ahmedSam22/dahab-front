import { Component, OnInit, ChangeDetectorRef, HostBinding, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'environments/environment';
const mapboxgl = require('mapbox-gl');
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA)public data:any){

    
  }
  map: any;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = this.data.lat;
  lng = this.data.lng;

  ngOnInit() {

    mapboxgl.accessToken = environment.mapbox.accessToken;
    // mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 15,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }


  showOnGoogle(){
    window.open(`https://maps.google.com/?q=${this.lat} +${this.lng}`, 'blank');
  }
}
