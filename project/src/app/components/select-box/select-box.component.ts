import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./select-box.component.css']
})
export class SelectBoxComponent {
  @Input()btnClass:string='selected-option';
  @Input()isDarkModeActive?:boolean=false;
  @Input()graphName?:string;
  @Input()dropdownVisible?:boolean=false;

  @Input()btnNgClass:{}={'selected-option-darkMode':this.isDarkModeActive};
  @Input()selectedOption?:string;
  @Input()RecClass:string='center-half-rectangle';
  @Input()RecNgClass:{}={ rotate: this.dropdownVisible,'half-rectangle-dark':this.isDarkModeActive};

ngAfterViewInit(){
  console.log('RecClass'+this.RecClass)
  console.log(this.RecNgClass)
}
}
