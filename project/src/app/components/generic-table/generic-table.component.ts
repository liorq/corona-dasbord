import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
// import 'echarts/theme/dark';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})


export class GenericTableComponent implements OnInit{
  isDarkModeActive?:boolean=this.coronaSvc.isDarkModeActive.getValue();
  items = [  { graphName: 'main1', title: 'ממוצע נע סך הבדיקות', color: 'salmon',isDarkMode:this.isDarkModeActive },  { graphName: 'main1', title: 'אנטיגן מוסדי', color: 'gold',isDarkMode:this.isDarkModeActive  },  { graphName: 'main1', title: 'בדיקות PCR', color: 'blue',isDarkMode:this.isDarkModeActive  },  { graphName: 'main', title: 'ממוצע נע נפטרים', color: 'salmon' ,isDarkMode:this.isDarkModeActive },  { graphName: 'main', title: 'נפטרים', color: 'turkiz' ,isDarkMode:this.isDarkModeActive },  { graphName: 'main3', title: 'מחוסנים', color: 'turkiz' ,isDarkMode:this.isDarkModeActive },  { graphName: 'main3', title: 'מחוסנים ללא תוקף', color: 'gold',isDarkMode:this.isDarkModeActive  },  { graphName: 'main3', title: 'לא מחוסנים', color: 'blue' ,isDarkMode:this.isDarkModeActive },
  { graphName: 'main1', title: 'ממוצע נע סך הבדיקות', color: 'orange',isDarkMode:!this.isDarkModeActive },  { graphName: 'main1', title: 'אנטיגן מוסדי', color: 'salmon',isDarkMode:!this.isDarkModeActive  },  { graphName: 'main1', title: 'בדיקות PCR', color: 'aqua',isDarkMode:!this.isDarkModeActive  },  { graphName: 'main', title: 'ממוצע נע נפטרים', color: 'lightgreen' ,isDarkMode:!this.isDarkModeActive },  { graphName: 'main', title: 'נפטרים', color: 'goldenrod' ,isDarkMode:!this.isDarkModeActive },  { graphName: 'main3', title: 'מחוסנים', color: 'lightgreen' ,isDarkMode:!this.isDarkModeActive },  { graphName: 'main3', title: 'מחוסנים ללא תוקף', color: 'salmon',isDarkMode:!this.isDarkModeActive  },  { graphName: 'main3', title: 'לא מחוסנים', color: 'aqua' ,isDarkMode:!this.isDarkModeActive },];

  colors = [
    { name: 'אדום', range: 'ציון 7.5 ומעלה', class: 'red' },
    { name: 'כתום', range: 'ציון בין 6 ל - 7.5', class: 'orange' },
    { name: 'צהוב', range: 'ציון בין 4.5 ל - 6', class: 'yellow' },
    { name: 'ירוק', range: 'ציון עד 4.5', class: 'green' }
  ];
  searchQuery: string = '';

  @Input()title?:string;
  @Input() chart: echarts.ECharts | null = null;
  @Input() resizeTimeoutId: any;
  @Input() graphName:string="";
  @Input()optionObj?:{};
  @Input() graphSize:string="width: 100%; height: 315px;";
  @Input() isTable?:boolean;
  @Input() periodOfTime?:number=25;
  @Input() tablesTitle?:{};
  @Input() tablesData:any=[];

 isActiveShareAndDownload?:boolean=false;
  filteredTablesData: any;
  selectedOption?: string='Option 1';
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  data: any[] = [
    { label: 'Option 1', value: 10 },
    { label: 'Option 2', value: 20 },
    { label: 'Option 3', value: 30 }
  ];

  filteredData: any[];
  dropdownVisible: boolean = false;
  clickCounterObj:any={
    'id':0,
    'name':0,
    'age':0,
    'email':0,
    'phone':0,
    'address':0,
  }

  currentSort = { column: 'id', direction: 'asc' };
  sortDirection: string="";
  tableColumns: any;



  ngOnInit(){
    this.coronaSvc.isDarkModeActive.subscribe((newStatus:boolean)=>{
      this.isDarkModeActive=newStatus;
        this.items.forEach(item => {
          item.isDarkMode = !item.isDarkMode;
        });

    })
  }


  search(): void {
    if (!this.tablesData) {
      return;
    }
    if(this.searchQuery.length==0){
      this.filteredTablesData=this.tablesData.address
    }
  else {
      if(this.searchQuery.length>0){
         this.filteredTablesData = this.tablesData.filter((item:any) => item.address.toLowerCase().includes(this.searchQuery.toLowerCase()));

       this.filteredTablesData= this.filteredTablesData.map((item:any)=>{

      return item.address.toLowerCase()
      })
      }

    }
  }


  constructor(private coronaSvc:CoronaService) {
    this.filteredData = this.data;
  }


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

  ngAfterViewInit(): void {
    if(this.graphName=="")
    return

    const chartDom = document.getElementById(this.graphName)!;
    // const myChart = echarts.init(chartDom,'dark');

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





  onSort(column: string) {
    if(this.clickCounterObj[column]==2)
    this.clickCounterObj[column]=0;
    else
    this.clickCounterObj[column]+=1

    if (column === this.currentSort.column) {
      this.currentSort.direction = this.currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.currentSort.column = column;
      this.currentSort.direction = 'asc';
    }
    this.tablesData.sort((a:any, b:any) => {
      if (a[this.currentSort.column] < b[this.currentSort.column]) {
        return this.currentSort.direction === 'asc' ? -1 : 1;
      } else if (a[this.currentSort.column] > b[this.currentSort.column]) {
        return this.currentSort.direction === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

}
