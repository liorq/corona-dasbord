import { Component, OnInit } from '@angular/core';
import { Colors } from 'chart.js';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import { secondOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-testt2',
  templateUrl: './testt2.component.html',
  styleUrls: ['./testt2.component.css','../testt54656552/testt54656552.component.css']
})
export class Testt2Component implements OnInit {

  options = ['Option 1', 'Option 2', 'Option 3'];
  private chart: echarts.ECharts | null = null;
  private resizeTimeoutId: any;
  private emphasisStyle = {
    itemStyle: {
      shadowBlur: 0.5,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  };
  ngOnInit(){
    var chartDom = document.getElementById('main1') as HTMLElement;
    let myChart = echarts.init(chartDom, undefined, );

    let option: EChartsOption | any;

    let xAxisData = [];
    let data1 = [];
    let data2 = [];
    let data3 = [];
    let data4 = [];
    for (let i = 0; i < 10; i++) {
      xAxisData.push('Class' + i);
      data1.push(+(Math.random() * 2).toFixed(2));
      data2.push(+(Math.random() * 5).toFixed(2));
      data3.push(+(Math.random() + 0.3).toFixed(2));
      data4.push(+Math.random().toFixed(2));
    }

    option = secondOption(this.emphasisStyle)



    myChart.on('brushSelected', function (params: any) {
      var brushed = [];
      var brushComponent = params.batch[0];
      for (var sIdx = 0; sIdx < brushComponent?.selected?.length; sIdx++) {
        var rawIndices = brushComponent?.selected[sIdx]?.dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
      }
      myChart.setOption({
        title: ''
      });
    });

option && myChart.setOption(option);
this.chart = myChart;
}

ngAfterViewInit(): void {
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
