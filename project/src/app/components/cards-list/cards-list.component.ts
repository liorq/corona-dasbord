import { Component, Input, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/corona.service';
import { openWindowIconI } from 'src/app/utils/app.data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsComponent implements OnInit{
isDarkModeActive=this.coronaSvc.isDarkModeActive.getValue()
dataArray = [
  { num: "firstNum", line: "firstLine" },
  { num: "secondNum", line: "secondLine" },
  { num: "thirdNum", line: "thirdLine" },
  { num: "fourNum", line: "fourLine" },
  { num: "fiveNum", line: "fiveLine" }
];
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
