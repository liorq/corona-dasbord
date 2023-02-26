import { Component, OnInit } from '@angular/core';
import { firstOption } from 'src/app/app.graphData';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-deads',
  templateUrl: './deads.component.html',
  styleUrls: ['./deads.component.css']
})
export class DeadsComponent implements OnInit{
   timePeriod?:number=25;
  option: echarts.EChartsOption | any = firstOption(this.timePeriod,false);

  constructor(private coronaSvc:CoronaService){}
ngOnInit(): void {
  this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{
    this.option= firstOption(this.timePeriod,newStatus);
  })
}

}
