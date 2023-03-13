import { Component } from '@angular/core';
import { titles2 } from 'src/app/utils/app.arrays';

@Component({
  selector: 'app-major-indicators',
  templateUrl: './major-indicators.component.html',
  styleUrls: ['./major-indicators.component.css']
})
export class MajorIndicatorsComponent {
titles=titles2;
}
