import { Component } from '@angular/core';
import { viewOnObj } from '../../utils/app.data';

@Component({
  selector: 'app-view-on',
  templateUrl: './view-on.component.html',
  styleUrls: ['./view-on.component.css']
})
export class ViewOnComponent {
dataToDisplay:any[]=viewOnObj;
}
