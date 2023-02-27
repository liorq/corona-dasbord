import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { secondOption } from 'src/app/app.graphData';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit{



  constructor(private coronaSvc:CoronaService){}
  timePeriod?:number=25;

  private chart: echarts.ECharts | null = null;

  private emphasisStyle = {
    itemStyle: {
      shadowBlur: 0.5,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  };
  public option:any=secondOption(this.emphasisStyle,this.timePeriod,false);

  ngOnInit(){
      this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{

        this.option=secondOption(this.emphasisStyle,this.timePeriod,newStatus)

        var chartDom = document.getElementById('main1') as HTMLElement;
        let myChart = echarts.init(chartDom);
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

        this.option  && myChart.setOption(this.option);
        this.chart = myChart;



      })




}

}
