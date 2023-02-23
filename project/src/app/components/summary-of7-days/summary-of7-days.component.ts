import { Component } from '@angular/core';
import { SummaryOf7DaysObj } from '../../app.data';

@Component({
  selector: 'app-summary-of7-days',
  templateUrl: './summary-of7-days.component.html',
  styleUrls: ['./summary-of7-days.component.css']
})
export class SummaryOf7DaysComponent {
dataToDisplay:any[]=SummaryOf7DaysObj
}
