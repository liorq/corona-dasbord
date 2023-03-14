import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-options',
  templateUrl: './my-options.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./my-options.component.css']
})
export class MyOptionsComponent {
@Input()options?:any[];
@Input()isDarkModeActive?:boolean;
@Input()ngClassForBtns?:{}={'deep-blue-btn':this.isDarkModeActive};
@Input()dropdownVisible?:boolean;

}
