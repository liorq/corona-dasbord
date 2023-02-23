import { Component, Input } from '@angular/core';
import { openWindowIconI } from 'src/app/app.data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsComponent {
@Input()dataToDisplay?:any[]=[];
public openWindowsIIcon=openWindowIconI;
changeNumberFont(word:string){
return{'medium-num':word.includes('Num')}
}
}
