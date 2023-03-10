import {  Component, OnInit } from '@angular/core';

import * as echarts from 'echarts';
import { firstOption } from 'src/app/app.graphData';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-deads',
  templateUrl: './deads.component.html',
  styleUrls: ['./deads.component.css']
})
export class DeadsComponent implements OnInit{
  timePeriodsInDays?:number=25;
   option?: echarts.EChartsOption | any;
   isDarkModeActive?:boolean;

  constructor(private coronaSvc:CoronaService){}

  ngOnInit(): void {
  this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{
    this.isDarkModeActive=newStatus;
    this.option= firstOption(this.timePeriodsInDays,this.isDarkModeActive);
  })
  this.coronaSvc.timePeriodsInDays.subscribe((newTimePeriods)=>{
    this.timePeriodsInDays=newTimePeriods[0];
    this.option= firstOption(this.timePeriodsInDays,this.isDarkModeActive);
  })
}



}
