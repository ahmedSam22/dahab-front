import { Component, OnInit, ChangeDetectorRef, HostBinding, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { environment } from 'environments/environment';
const mapboxgl = require('mapbox-gl');
@Component({
  selector: 'app-show-map',
  templateUrl: './show-map.component.html',
  styleUrls: ['./show-map.component.scss']
})
export class ShowMapComponent {
  @Input() outlat: any;
  @Input() outlng: any;
 
 
  
  map: any;
  style = 'mapbox://styles/mapbox/streets-v11';


  ngOnInit() {

    mapboxgl.accessToken = environment.mapbox.accessToken;
    // mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 15,
      center: [this.outlng,this.outlat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
  }


  showOnGoogle(){
    window.open(`https://maps.google.com/?q=${ this.outlat} +${this.outlng}`, 'blank');
  }
}
