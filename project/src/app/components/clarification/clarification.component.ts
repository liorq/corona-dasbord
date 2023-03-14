import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clarification',
  templateUrl: './clarification.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./clarification.component.css']
})
export class ClarificationComponent {
@Input()graphName?:string;
@Input()isDarkModeActive?:boolean;
@Input()isTable?:boolean;
@Input()ngClassObJ={ 'pic-graph-light-dark': this.isDarkModeActive };
}
