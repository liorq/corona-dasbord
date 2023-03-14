import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-search-options',
  templateUrl: './my-search-options.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./my-search-options.component.css']
})
export class MySearchOptionsComponent {
  @Input()options?:any[];
  @Input()isDarkModeActive?:boolean;
  @Input()ngClassForBtns?:{}={'deep-blue-btn':this.isDarkModeActive};
  @Input()dropdownVisible?:boolean;
}
