import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { threeOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-testt333',
  templateUrl: './testt333.component.html',
  styleUrls: ['./testt333.component.css']
})
export class Testt333Component {
   option: echarts.EChartsOption|any=threeOption();
}
