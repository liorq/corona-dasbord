import { Component } from '@angular/core';
import { fourOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-further-investigations',
  templateUrl: './further-investigations.component.html',
  styleUrls: ['./further-investigations.component.css','../deads/deads.component.css']
})
export class FurtherInvestigationsComponent {
  option?: echarts.EChartsOption|any= fourOption(25,false);

}
