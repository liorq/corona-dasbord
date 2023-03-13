import { Component, Input } from '@angular/core';
import { clickCounterObj } from 'src/app/utils/app.arrays';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css','../generic-table/generic-table.component.css']
})
export class TableHeaderComponent {
@Input() graphName?:string;
@Input() tablesData?:any=[];
@Input()isDarkModeActive?:boolean;
clickCounterObj=clickCounterObj;
currentSort = { column: 'id', direction: 'asc' };
clickCounterObjRec=[
  {'arrow-down': this.clickCounterObj.address == 1, 'arrow-up': this.clickCounterObj.address == 2},
  {'arrow-down': this.clickCounterObj.phone == 1, 'arrow-up': this.clickCounterObj.phone == 2},
  {'arrow-down': this.clickCounterObj.email == 1, 'arrow-up': this.clickCounterObj.email == 2},
  {'arrow-down': this.clickCounterObj.age == 1, 'arrow-up': this.clickCounterObj.age == 2},
  {'arrow-down': this.clickCounterObj.name == 1, 'arrow-up': this.clickCounterObj.name == 2},
  {'arrow-down': this.clickCounterObj.id == 1, 'arrow-up': this.clickCounterObj.id == 2},
]
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

}
