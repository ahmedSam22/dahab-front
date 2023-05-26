import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-office-card',
  templateUrl: './office-card.component.html',
  styleUrls: ['./office-card.component.scss']
})
export class OfficeCardComponent {

  // @Input() data: any;
  @Input() id: any;
  @Input() name: any;
  @Input() dist: any;
  @Input() description: any;
  @Input() outside: any;
  @Input() customise: any;
  @Input() photos: any;
}
