import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/corona.service';
import { SummaryOf7DaysObj } from '../../app.data';

@Component({
  selector: 'app-summary-of7-days',
  templateUrl: './summary-of7-days.component.html',
  styleUrls: ['./summary-of7-days.component.css']
})
export class SummaryOf7DaysComponent implements OnInit{

constructor(private coronaSvc:CoronaService){}
dataToDisplay:any[]=SummaryOf7DaysObj;
isDarkModeActive?:boolean;
ngOnInit(){
  this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{
    this.isDarkModeActive=newStatus;
  })
}

}
