import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { firstOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-testt54656552',
  templateUrl: './testt54656552.component.html',
  styleUrls: ['./testt54656552.component.css',]
})
export class Testt54656552Component  {
  option: echarts.EChartsOption | any = firstOption();;
}






