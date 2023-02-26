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
  @Input() isTable?:boolean;
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



  clickCounterObj:any={
    'id':0,
    'name':0,
    'age':0,
    'email':0,
    'phone':0,
    'address':0,
  }
  tableData = [
    { id: 34, name: '10%', age: '24%', email: 7.2, phone: 7.6, address: 'אילת' },
    { id: 63, name: '30%', age: '24%', email: 4.2, phone: 2.2, address: 'מודיעין' },
    { id: 257, name: '0%', age: '30%', email: 2.2, phone: 5.2, address: 'ירושלים' },
    { id: 29, name: '20%', age: '24%', email: 4.2, phone: 4.2, address: 'תל אביב' },
    // { id: 30, name: '20%', age: '26%', email: 2.2, phone: 7.2, address: 'ראש העין' },
    // { id: 20, name: '20%', age: '24%', email: 1.2, phone: 9.2, address: 'פתח תקווה' },

  ];
  currentSort = { column: 'id', direction: 'asc' };
  sortDirection: string="";
  tableColumns: any;




  // Define a function to handle column header clicks
  onSort(column: string) {
    if(this.clickCounterObj[column]==2)
    this.clickCounterObj[column]=0;
    else
    this.clickCounterObj[column]+=1

    if (column === this.currentSort.column) {
      // If the clicked column is already the current sort column, reverse the sort direction
      this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      // If the clicked column is a different column, set it as the new sort column with ascending direction
      this.currentSort.column = column;
      this.currentSort.direction = 'asc';
    }
    // Sort the table data based on the current sort column and direction
    this.tableData.sort((a:any, b:any) => {
      if (a[this.currentSort.column] < b[this.currentSort.column]) {
        return this.currentSort.direction === 'asc' ? -1 : 1;
      } else if (a[this.currentSort.column] > b[this.currentSort.column]) {
        return this.currentSort.direction === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  onColumnHeaderClick(column:any) {
    if (column.clicked) {
      column.clicked = false;
      this.sortDirection = '';
    } else {
      this.tableColumns.forEach((col:any) => col.clicked = false);
      column.clicked = true;
      this.sortDirection = 'asc';
    }
  }
}
