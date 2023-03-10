import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { emphasisStyle, links3 } from 'src/app/utils/app.arrays';
import { secondOption } from 'src/app/app.graphData';
import { CoronaService } from 'src/app/services/corona.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements AfterViewInit{



  constructor(private coronaSvc:CoronaService){}
  timePeriod?:number=25;
  isDarkModeActive?:boolean;
  private chart: echarts.ECharts | null = null;
  links = links3;

  private emphasisStyle = emphasisStyle
  public option:any=secondOption(this.emphasisStyle,this.timePeriod,false);
ngAfterViewInit(): void {
      this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{
        this.isDarkModeActive=newStatus
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

      this.coronaSvc.timePeriodsInDays.subscribe((newTimePeriods)=>{
        this.timePeriod=newTimePeriods[1];
        this.option= secondOption(this.emphasisStyle,this.timePeriod,this.isDarkModeActive);
      })


}

}
