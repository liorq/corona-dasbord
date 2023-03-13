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

headersOfLightTable =[
  {
    ContainerNgClass: { 'deep-blue': this.isDarkModeActive },
    graphName: 'lights',
    sortField: 'address',
    ContainerClass: 'align-div cell title',
    text: "חולים פעילים"
  },
  {
    ContainerNgClass: { 'deep-blue': this.isDarkModeActive },
    graphName: 'lights',
    sortField: 'phone',
    ContainerClass: 'align-div cell title',
    text: "שיעור שינוי מאומתים"
  },



    {
      ContainerNgClass: { 'deep-blue': this.isDarkModeActive },
      graphName: 'lights',
      sortField: 'email',
      ContainerClass: 'align-div cell title',
      text: "% הבדיקות החיוביות"
    },



    {
      ContainerNgClass: { 'deep-blue': this.isDarkModeActive },
      graphName: 'lights',
      sortField: 'age',
      ContainerClass: 'align-div cell title',
      text: "חולים חדשים לכל 10,000 נפש"
    },


    {
      ContainerNgClass: { 'deep-blue': this.isDarkModeActive },
      graphName: 'lights',
      sortField: 'name',
      ContainerClass: 'align-div cell title',
      text: "ציון וצבע יומי"
    },


    {
      ContainerNgClass: { 'deep-blue': this.isDarkModeActive },
      graphName: 'lights',
      sortField: 'id',
      ContainerClass: 'align-div cell title',
      text: "ציון וצבע יומי"
    },



]
headersOfVaccinationTable = [

  {
    ContainerNgClass: { 'lavender-background': true,'deep-blue':this.isDarkModeActive },
    graphName: 'Vaccination',
    sortField: 'address',
    ContainerClass: 'align-div cell title',
    text: "ישוב"
  },

    {
      ContainerNgClass:{ 'lavender-background': true, 'deep-blue': this.isDarkModeActive },
      graphName: 'Vaccination',
      sortField: 'phone',
      ContainerClass: 'align-div cell title',
      text:"מתחסנים במנה ראשונה %"
    },

    {
        ContainerNgClass: { 'lavender-background': true, 'deep-blue': this.isDarkModeActive },
        graphName: 'Vaccination',
        sortField: 'email',
        ContainerClass: 'align-div cell title',
        text: "% מתחסנים מנה שנייה"
      },

      {
        ContainerNgClass: { 'lavender-background': true, 'deep-blue': this.isDarkModeActive },
        graphName: 'Vaccination',
        sortField: 'age',
        ContainerClass: 'align-div cell title',
        text: "% מתחסנים מנה שלישית"
      },


      {
        ContainerNgClass: { 'lavender-background': true, 'deep-blue': this.isDarkModeActive },
        graphName: 'Vaccination',
        sortField: 'name',
        ContainerClass: 'align-div cell title',
        text: "חולים פעילים לכל 10,000 נפש"
      },

      {
        ContainerNgClass: { 'lavender-background': true, 'deep-blue': this.isDarkModeActive },
        graphName: 'Vaccination',
        sortField: 'id',
        ContainerClass: 'align-div cell title',
        text: "חולים פעילים לכל 10,000 נפש"
      },


];
headers=this.graphName==='lights'?this.headersOfLightTable:this.headersOfVaccinationTable;


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
