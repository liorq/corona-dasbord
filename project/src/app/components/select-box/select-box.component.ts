import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./select-box.component.css']
})
export class SelectBoxComponent {
  @Input()btnClass?:string='selected-option';
  @Input()isDarkModeActive?:boolean;
  @Input()graphName?:string;
  @Input()dropdownVisible?:boolean;
  
  @Input()btnNgClass?:{}={'selected-option-table':this.graphName=='Vaccination','flex-and-center':this.graphName=='lights','selected-option-darkMode':this.isDarkModeActive};
  @Input()selectedOption?:string;
  @Input()RecClass?:string='center-half-rectangle';
  @Input()RecNgClass?:{}={ rotate: this.dropdownVisible,'center-half-rectangle-dark':this.isDarkModeActive };

}
