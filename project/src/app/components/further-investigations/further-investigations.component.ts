import { Component } from '@angular/core';
import { fourOption } from 'src/app/app.graphData';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-further-investigations',
  templateUrl: './further-investigations.component.html',
  styleUrls: ['./further-investigations.component.css','../deads/deads.component.css']
})
export class FurtherInvestigationsComponent {
  option?: echarts.EChartsOption|any= fourOption(25,false);
  timePeriod?:number=25;
  constructor(private coronaSvc:CoronaService){}

ngOnInit(): void {
  this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{
  this.option=fourOption(this.timePeriod,newStatus)
  })
  
}
}
