import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { fourOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-testt4',
  templateUrl: './testt4.component.html',
  styleUrls: ['../testt2/testt2.component.css','./testt4.component.css','../testt54656552/testt54656552.component.css','../generic-table/generic-table.component.css']
})
export class Testt4Component{
  selectedOption?: string;
   option?: echarts.EChartsOption|any= fourOption();

}
