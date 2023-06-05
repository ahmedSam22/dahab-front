import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-driver-card',
  templateUrl: './driver-card.component.html',
  styleUrls: ['./driver-card.component.scss']
})
export class DriverCardComponent {
  @Input() id: any;
  @Input() name: any;
  @Input() available: any;

  @Input() photo: any;
  @Input() type: any;
}
