import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesService } from '../activities.service';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent {
  @Input() id: any;
  @Input() name: any;
  @Input() night: any;
  @Input() photos: any;
  @Input() office: any;
  @Input() description: any;
}

