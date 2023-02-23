import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { firstOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-testt54656552',
  templateUrl: './testt54656552.component.html',
  styleUrls: ['./testt54656552.component.css','../generic-table/generic-table.component.css']
})
export class Testt54656552Component  {
  private chart: echarts.ECharts | null = null;
  private resizeTimeoutId: any;
  option: echarts.EChartsOption | any = firstOption();;


  ngAfterViewInit(): void {
    const chartDom = document.getElementById('main')!;
    const myChart = echarts.init(chartDom);
    this.chart?.setOption(this.option);
    this.option && myChart.setOption(this.option);
    this.chart = myChart;
    // Attach resize event listener
    window.addEventListener('resize', () => {
      if (this.resizeTimeoutId) {
        clearTimeout(this.resizeTimeoutId);
      }
      this.resizeTimeoutId = setTimeout(() => {
        this.chart?.resize(); // Call resize method on chart object
      }, 300);
    });
  }
}






