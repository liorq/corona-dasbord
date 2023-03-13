import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css','../cards-list/cards-list.component.css']
})
export class CardHeaderComponent {
  @Input() text?:string;
  @Input() openWindowsIIcon:string="";
  @Input() isDarkModeActive?:boolean;

}
