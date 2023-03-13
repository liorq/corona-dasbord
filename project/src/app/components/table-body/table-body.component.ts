import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-body',
  templateUrl: './table-body.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./table-body.component.css']
})
export class TableBodyComponent {
@Input() graphName?:string;
@Input() tablesData?:any=[];
@Input()isDarkModeActive?:boolean;
@Input() isTable?:boolean;

getNgClassColor(row:any,position:number){
  const firstObj={
    green: row.phone < 4.5,
    yellow: row.phone > 4.5 && row.phone < 6,
    orange: row.phone > 6 && row.phone < 7.5,
    red: row.phone > 7.5,
    color: this.graphName == 'lights',
    fontWeight400: this.graphName == 'Vaccination'
  }
  const secondObj={
    'color2': this.graphName == 'Vaccination',
    'lightgreen': row.id < 4.5,
    'yellow': row.id > 4.6 && row.id < 5.9,
    'orange': row.id > 6.1 && row.id < 6.8
}
return position==2?secondObj:firstObj;
}
}
