import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { threeOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-testt333',
  templateUrl: './testt333.component.html',
  styleUrls: ['../testt2/testt2.component.css','./testt333.component.css']
})
export class Testt333Component {
  private chart: echarts.ECharts | null = null;
  private resizeTimeoutId: any;

   option?: echarts.EChartsOption;
   myChart:any;

  ngAfterViewInit(): void {
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('main3')  as HTMLElement;;
    let myChart = echarts.init(chartDom );
    var option: EChartsOption|any;

    const colors = ['#50cbfd', '#237d7d', '#b6ca51'];

    option = threeOption(colors)

    option && myChart.setOption(option);
    this.chart = myChart;
    window.addEventListener('resize', () => {
      if (this.resizeTimeoutId) {
        clearTimeout(this.resizeTimeoutId);
      }
      this.resizeTimeoutId = setTimeout(() => {
        this.chart?.resize();
      }, 300);
    });
  }

}
