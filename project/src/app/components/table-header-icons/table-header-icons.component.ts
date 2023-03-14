import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-header-icons',
  templateUrl: './table-header-icons.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./table-header-icons.component.css']
})
export class TableHeaderIconsComponent {
  @Input() options?:any[];
  @Input() isTable?:boolean;
  @Input() title:any="";
  @Input() selectedOption:any="";
  @Input() graphName:any="";
  @Input()isDarkModeActive?:boolean;
  @Input() dropdownVisible?:boolean;



  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
}
