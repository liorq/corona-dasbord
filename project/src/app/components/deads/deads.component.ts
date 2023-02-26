import { Component } from '@angular/core';
import { firstOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-deads',
  templateUrl: './deads.component.html',
  styleUrls: ['./deads.component.css']
})
export class DeadsComponent {
  option: echarts.EChartsOption | any = firstOption();;

}
