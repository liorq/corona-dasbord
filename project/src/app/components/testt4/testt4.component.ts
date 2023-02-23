import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { fourOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-testt4',
  templateUrl: './testt4.component.html',
  styleUrls: ['../testt2/testt2.component.css','./testt4.component.css','../testt54656552/testt54656552.component.css','../generic-table/generic-table.component.css']
})
export class Testt4Component{
  private chart: echarts.ECharts | null = null;
  private resizeTimeoutId: any;
  selectedOption?: string;

   option?: echarts.EChartsOption;
   myChart:any;

ngAfterViewInit(): void {
  type EChartsOption = echarts.EChartsOption;

  var chartDom = document.getElementById('main4') as HTMLElement;
  var myChart = echarts.init(chartDom);
  var option: EChartsOption|any;

  option = fourOption()

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
onSelect(event: Event): void {
  const selectElement = event.target as HTMLSelectElement;
  if (selectElement && selectElement.value) {
    // Do something with the selected value
    console.log(selectElement.value);
  }
}


onButton1Click() {
  console.log("Button 1 clicked");
}

onButton2Click() {
  console.log("Button 2 clicked");
}

onRadioChange(radioValue: string) {
  console.log(`Radio ${radioValue} selected`);
}
}
