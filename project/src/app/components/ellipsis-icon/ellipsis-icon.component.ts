import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ellipsis-icon',
  templateUrl: './ellipsis-icon.component.html',
  styleUrls: ['../generic-table/generic-table.component.css','./ellipsis-icon.component.css']
})
export class EllipsisIconComponent {
@Input()isDarkModeActive?:boolean;
@Input()isActiveShareAndDownload?:boolean;

}
