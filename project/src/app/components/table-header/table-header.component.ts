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

 componentObjects = [
  {
    ContainerNgClass: { 'lavender-background': true,'deep-blue':this.isDarkModeActive },
    clickFunction: this.resortTableData,
    graphName: 'Vaccination',
    rectangleNgClass: this.clickCounterObjRec[0],
    ContainerClass: 'align-div cell title',
    text: 'ישוב',
    arrowNgClass: {
      'arrow-down': clickCounterObj.address == 1,
      'arrow-up': clickCounterObj.address == 2
    }
  },
  {
    ContainerNgClass: { 'deep-blue':this.isDarkModeActive },
    clickFunction: this.resortTableData,
    graphName: 'lights',
    rectangleNgClass: this.clickCounterObjRec[0],
    ContainerClass: 'align-div cell title',
    text: 'חולים פעילים',
    arrowNgClass: {
      'arrow-down': clickCounterObj.address == 1,
      'arrow-up': clickCounterObj.address == 2
    }
  },
  {
    clickFunction: this.resortTableData,
    graphName: 'Vaccination',
    rectangleNgClass: this.clickCounterObjRec[1],
    text: 'מתחסנים במנה ראשונה %',
    arrowNgClass: {
      'arrow-down': clickCounterObj.phone == 1,
      'arrow-up': clickCounterObj.phone == 2
    }
  },
  {
    ContainerNgClass: { 'deep-blue':this.isDarkModeActive },
    clickFunction: this.resortTableData,
    graphName: 'lights',
    rectangleNgClass: this.clickCounterObjRec[1],
    text: 'שיעור שינוי מאומתים',
    arrowNgClass: {
      'arrow-down': clickCounterObj.phone == 1,
      'arrow-up': clickCounterObj.phone == 2
    }
  },
  {
    clickFunction: this.resortTableData,
    graphName: 'Vaccination',
    rectangleNgClass: this.clickCounterObjRec[2],
    text: '% מתחסנים מנה שנייה',
    arrowNgClass: {
      'arrow-down': clickCounterObj.email == 1,
      'arrow-up': clickCounterObj.email == 2
    }
  },
  {
    clickFunction: this.resortTableData,
    graphName: 'lights',
    rectangleNgClass: this.clickCounterObjRec[2],
    text: '% הבדיקות החיוביות',
    arrowNgClass: {
      'arrow-down': clickCounterObj.email == 1,
      'arrow-up': clickCounterObj.email == 2
    }
  },
  {
    clickFunction: this.resortTableData,
    graphName: 'Vaccination',
    rectangleNgClass: this.clickCounterObjRec[3],
    text: '% מתחסנים מנה שלישית',
    arrowNgClass: {
      'arrow-down': clickCounterObj.age == 1,
      'arrow-up': clickCounterObj.age == 2
    }
  },{
    clickFunction: this.resortTableData,
    graphName: 'Vaccination',
    rectangleNgClass: this.clickCounterObjRec[3],
    text: '% מתחסנים מנה שלישית',
    arrowNgClass: {
      'arrow-down': clickCounterObj.age == 1,
      'arrow-up': clickCounterObj.age == 2
    }
  },
  {
    clickFunction: this.resortTableData,
    graphName: 'Hospitalization',
    rectangleNgClass: this.clickCounterObjRec[4],
    text: 'מאומתים מאושפזים',
    arrowNgClass: {
      'arrow-down': clickCounterObj.hospitalized == 1,
      'arrow-up': clickCounterObj.hospitalized == 2
    }
  },
  {
    clickFunction: this.resortTableData,
    graphName: 'Mortality',
    rectangleNgClass: this.clickCounterObjRec[5],
    text: 'תמותה לפי קבוצת גיל',
    arrowNgClass: {
      'arrow-down': clickCounterObj.mortality == 1,
      'arrow-up': clickCounterObj.mortality == 2
    }
  }
];



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
