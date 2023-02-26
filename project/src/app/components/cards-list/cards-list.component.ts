import { Component, Input, OnInit } from '@angular/core';
import { openWindowIconI } from 'src/app/app.data';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsComponent implements OnInit{
isDarkModeActive=this.coronaSvc.isDarkModeActive.getValue()

ngOnInit(): void {
  this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{
  this.isDarkModeActive=newStatus;
  })
}
@Input()dataToDisplay?:any[]=[];
constructor(private coronaSvc:CoronaService){}
public openWindowsIIcon=openWindowIconI;
changeNumberFont(word:string){
return{'medium-num':word.includes('Num')}
}
}
