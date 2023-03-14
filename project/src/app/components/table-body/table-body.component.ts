import { Component, Input } from '@angular/core';
import { getNgClassColor } from 'src/app/utils/app.data';

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
  return getNgClassColor(row,position,this.graphName||'')
}
}
