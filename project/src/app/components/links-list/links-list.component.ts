import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent {
@Input()title?:string;
@Input()link?:string;
@Input()description?:string;
@Input()pictureClass?:string;
}
