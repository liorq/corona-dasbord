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

}
