import { Component } from '@angular/core';
import { threeOption } from 'src/app/app.graphData';
import { CoronaService } from 'src/app/corona.service';
import { titles4 } from 'src/app/utils/app.arrays';

@Component({
  selector: 'app-effect-of-vaccination-on-morbidity',
  templateUrl: './effect-of-vaccination-on-morbidity.component.html',
  styleUrls: ['./effect-of-vaccination-on-morbidity.component.css']
})
export class EffectOfVaccinationOnMorbidityComponent {
  option: echarts.EChartsOption|any=threeOption(25,false);
  timePeriod?:number=25;
  titles=titles4
  isDarkModeActive?:boolean;
  constructor(private coronaSvc:CoronaService){}
ngOnInit(): void {
  this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{
    this.isDarkModeActive=newStatus;
  this.option=threeOption(this.timePeriod,newStatus)
  })
  this.coronaSvc.timePeriodsInDays.subscribe((newTimePeriods)=>{
    this.timePeriod=newTimePeriods[2];
    this.option= threeOption(this.timePeriod,this.isDarkModeActive);
  })
}
}
