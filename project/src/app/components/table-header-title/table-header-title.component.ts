import { Component, Input, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/corona.service';
import { clickCounterObj } from 'src/app/utils/app.arrays';

@Component({
  selector: 'app-table-header-title',
  templateUrl: './table-header-title.component.html',
  styleUrls: ['./table-header-title.component.css','../generic-table/generic-table.component.css']
})
export class TableHeaderTitleComponent implements OnInit{
  // <!-- ContainerClass -->
  // <!-- rectangleNgClass -->
  // <!-- ContainerNgClass -->
  // <!-- text -->
  // <!-- textClass -->
@Input() ContainerClass:string="align-div cell title lavender-background";
@Input() rectangleNgClass:{}={};
@Input() ContainerNgClass:{}={'deep-blue':this.isDarkModeActive};
@Input() text:string="";
@Input() textClass:string="fontWeight400";
@Input() graphName?:string;
@Input()isDarkModeActive?:boolean;
@Input() tablesData?:any=[];
clickCounterObj=clickCounterObj;
currentSort = { column: 'id', direction: 'asc' };
@Input() PositionRectangleNgClass?:number;
clickCounterObjRec=[
  {'arrow-down': clickCounterObj.address == 1, 'arrow-up': clickCounterObj.address == 2},
  {'arrow-down': clickCounterObj.phone == 1, 'arrow-up': clickCounterObj.phone == 2},
  {'arrow-down': clickCounterObj.email == 1, 'arrow-up': clickCounterObj.email == 2},
  {'arrow-down': clickCounterObj.age == 1, 'arrow-up': clickCounterObj.age == 2},
  {'arrow-down': clickCounterObj.name == 1, 'arrow-up': clickCounterObj.name == 2},
  {'arrow-down': clickCounterObj.id == 1, 'arrow-up':clickCounterObj.id == 2},
]
constructor(coronaSvc:CoronaService){}
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


ngOnInit(): void {


}
}
