import { Component, OnInit, ChangeDetectorRef, HostBinding } from '@angular/core';
import { environment } from 'environments/environment';
const mapboxgl = require('mapbox-gl');
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  
  constructor(){

    
  }
  map: any;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 32.20510545;
  lng = 29.48544854;

  ngOnInit() {

    mapboxgl.accessToken = environment.mapbox.accessToken;
    // mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}
