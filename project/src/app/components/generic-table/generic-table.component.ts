import { Component, Input } from '@angular/core';
import * as echarts from 'echarts';




@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})


export class GenericTableComponent {
  @Input()title?:string;
  @Input() chart: echarts.ECharts | null = null;
  @Input() resizeTimeoutId: any;
  @Input() graphName:string="";
  @Input()optionObj?:{};
  @Input() graphSize:string="width: 100%; height: 315px;";

 isActiveShareAndDownload?:boolean=false;
  ngOnInit(): void {
    if(this.graphName=="")
    return


  }


  selectedOption?: string='Option 1';
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  data: any[] = [
    { label: 'Option 1', value: 10 },
    { label: 'Option 2', value: 20 },
    { label: 'Option 3', value: 30 }
  ];

  filteredData: any[];

  constructor() {
    this.filteredData = this.data;
  }

  dropdownVisible: boolean = false;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.dropdownVisible = false;
  }
  confirmSelect(type:string){
    if(type==='ok')
    console.log(this.selectedOption)
  }
  filterData() {
    this.filteredData = this.data.filter(item => item.label === this.selectedOption);
  }
  ngAfterViewInit(): void {
    if(this.graphName=="")
    return

    const chartDom = document.getElementById(this.graphName)!;
    const myChart = echarts.init(chartDom);
    let option:any=this.optionObj
    this.chart?.setOption(option);
    option && myChart.setOption(option);
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
