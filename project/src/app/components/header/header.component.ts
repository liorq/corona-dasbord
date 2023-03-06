import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  {
  isDarkModeActive?:boolean=this.coronaSvc.isDarkModeActive.getValue();
  isNavBarOpen?:boolean=this.coronaSvc.isNavBarOpen.getValue();
  isSwitchToEnglishBtnOpen?:boolean=false;
constructor(public coronaSvc:CoronaService){}

toggleMode(){

this.isDarkModeActive=!this.isDarkModeActive
  this.coronaSvc.isDarkModeActive.next(this.isDarkModeActive)
  console.log(this.isDarkModeActive)
}
}
