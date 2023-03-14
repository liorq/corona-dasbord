import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-icon',
  templateUrl: './info-icon.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./info-icon.component.css']
})
export class InfoIconComponent {
@Input() isDarkModeActive?:boolean;
}
