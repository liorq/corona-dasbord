import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { clickCounterObj, colors, data, options } from 'src/app/app.arrays';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})


export class GenericTableComponent implements OnInit{
  @Input()title?:string;
  @Input() chart: echarts.ECharts | null = null;
  @Input() resizeTimeoutId: any;
  @Input() graphName:string="";
  @Input()optionObj?:{};
  @Input() graphSize:string="width: 100%; height: 315px;";
  @Input() isTable?:boolean;
  @Input() periodOfTime?:number=25;
  @Input() tablesTitle?:{};
  @Input() tablesData?:any=[];
  isHovering = false;

  isDarkModeActive?:boolean=this.coronaSvc.isDarkModeActive.getValue()
  items = [  { graphName: 'main1', title: 'ממוצע נע סך הבדיקות', color: 'salmon',isDarkMode:this.isDarkModeActive },  { graphName: 'main1', title: 'אנטיגן מוסדי', color: 'gold',isDarkMode:this.isDarkModeActive  },  { graphName: 'main1', title: 'בדיקות PCR', color: 'blue',isDarkMode:this.isDarkModeActive  },  { graphName: 'main', title: 'ממוצע נע נפטרים', color: 'salmon' ,isDarkMode:this.isDarkModeActive },  { graphName: 'main', title: 'נפטרים', color: 'turkiz' ,isDarkMode:this.isDarkModeActive },  { graphName: 'main3', title: 'מחוסנים', color: 'turkiz' ,isDarkMode:this.isDarkModeActive },  { graphName: 'main3', title: 'מחוסנים ללא תוקף', color: 'gold',isDarkMode:this.isDarkModeActive  },  { graphName: 'main3', title: 'לא מחוסנים', color: 'blue' ,isDarkMode:this.isDarkModeActive },
  { graphName: 'main1', title: 'ממוצע נע סך הבדיקות', color: 'orange',isDarkMode:!this.isDarkModeActive },  { graphName: 'main1', title: 'אנטיגן מוסדי', color: 'salmon',isDarkMode:!this.isDarkModeActive  },  { graphName: 'main1', title: 'בדיקות PCR', color: 'aqua',isDarkMode:!this.isDarkModeActive  },  { graphName: 'main', title: 'ממוצע נע נפטרים', color: 'lightgreen' ,isDarkMode:!this.isDarkModeActive },  { graphName: 'main', title: 'נפטרים', color: 'goldenrod' ,isDarkMode:!this.isDarkModeActive },  { graphName: 'main3', title: 'מחוסנים', color: 'lightgreen' ,isDarkMode:!this.isDarkModeActive },  { graphName: 'main3', title: 'מחוסנים ללא תוקף', color: 'salmon',isDarkMode:!this.isDarkModeActive  },  { graphName: 'main3', title: 'לא מחוסנים', color: 'aqua' ,isDarkMode:!this.isDarkModeActive },];
  colors = colors;
  searchQuery: string = '';
  isActiveShareAndDownload?:boolean=false;
  filteredTablesData: any;
  selectedOption?: string='חודש אחרון';
  selectedOption2?: string='כלל הישובים';
  options=options
  data=data
  filteredData: any[];
  dropdownVisible: boolean = false;
  clickCounterObj=clickCounterObj;
  currentSort = { column: 'id', direction: 'asc' };
  sortDirection: string="";
  tableColumns: any;

  constructor(private coronaSvc:CoronaService) {
    this.filteredData = this.data;
  }
  ngOnInit(){
    this.filteredData =[...this.tablesData];

    this.coronaSvc.isDarkModeActive.subscribe((newStatus:boolean)=>{
      this.isDarkModeActive=newStatus;
        this.items.forEach(item => {
          item.isDarkMode = !item.isDarkMode;
        });

        if(this.graphName==""||this.isTable)
        return

        setTimeout(() => {
        const chartDom = document.getElementById(this.graphName)!;
        const myChart = echarts?.init(chartDom);
        let option:any=this.optionObj
        this.chart?.setOption(option);
        option && myChart?.setOption(option);
        this.chart = myChart;
        }, 1000);


    })
  }

  toggleHover(event:Event) {
    event.stopPropagation();
    this.isHovering = !this.isHovering;
  }





  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  onInputClick(event: MouseEvent) {
    event.stopPropagation();
  }
  selectOption(option: string) {

    this.selectedOption = option;
    this.dropdownVisible = false;


  }
  confirmSelectTable(option:string){

  }
  confirmSelect(type:string){
    if(type==='ok'){
      console.log(this.selectedOption)
    switch(this.selectedOption){
      case 'עד עכשיו':this.periodOfTime=365;break;
        case 'שנה':this.periodOfTime=300;break;
          case 'חצי שנה':this.periodOfTime=150;break;
          case '3 חודשים':this.periodOfTime=70;break;
            case 'חודש אחרון':this.periodOfTime=25;break;
    }
    let timePeriods:any=this.coronaSvc.timePeriods.getValue();
    let location=5;
    console.log(this.graphName)
    switch(this.graphName+''){
      case 'main':location=0;break;
        case 'main1':location=1;break;
          case 'main3':location=2;break;
            case 'main4':location=3;break;
    }

    timePeriods[location]=this.periodOfTime;
    this.coronaSvc.timePeriods.next(timePeriods)
    console.log(timePeriods)
    setTimeout(()=>{
    this.ngAfterViewInit(timePeriods[location])
    },500)
    }

  }

  ngAfterViewInit(timePeriods:number=25): void {
    if(this.graphName==""||this.isTable)
    return

    this.initializeGraph();
    this.ResizeGraphSize();
  }


  initializeGraph(){
    const chartDom = document.getElementById(this.graphName)!;
    const myChart = echarts?.init(chartDom);
    let option:any=this.optionObj
    this.chart?.setOption(option);
    option && myChart?.setOption(option);
    this.chart = myChart;
    this.ResizeGraphSize();
  }

  ResizeGraphSize(){
    window.addEventListener('resize', () => {
      if (this.resizeTimeoutId) {
        clearTimeout(this.resizeTimeoutId);
      }
      this.resizeTimeoutId = setTimeout(() => {
        this.chart?.resize(); // Call resize method on chart object
      }, 300);
    });
  }

  resortTableData(column: string) {
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

 searchText: string = '';
searchResults: string[] = [];
showResults: boolean = false;

onInput() {

  let newArray;
  if (this.searchText.length > 0) {
    if(this.graphName=='lights')
     newArray=  this.tablesData.filter((value:any) =>value?.address?.includes(this.searchText))
   else{
   newArray=  this.tablesData.filter((value:any) =>value?.id?.includes(this.searchText))
   }



   if(newArray.length>0)
    this.showResults = true;
  } else {
    this.showResults = false;
  }
}

onResultClick(result: any,event:Event) {

   event.stopPropagation();
   if(this.graphName=='lights')
   this.searchText = result?.address;
   this.selectedOption2=result?.address;

   if(this.graphName=='Vaccination'){
   this.searchText = result.id;
   this.selectedOption2=result.id;
   }

   this.showResults = false;
   this.filterCites()

}
resetSearchValue(){
if(this.searchText=='')
this.filteredData =[...this.tablesData];
}

filterCites(){
  if(this.graphName=='lights')
  this.filteredData=this.tablesData.filter((c:any)=>c.address==this.searchText)
  if(this.graphName=='Vaccination')
  this.filteredData=this.tablesData.filter((c:any)=>c.id==this.searchText)

}
}
