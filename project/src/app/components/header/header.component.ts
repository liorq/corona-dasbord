import { Component, OnInit } from '@angular/core';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent  implements OnInit{
  isDarkModeActive?:boolean;
  isNavBarOpen?:boolean;
  isSwitchToEnglishBtnOpen?:boolean=false;

constructor(public coronaSvc:CoronaService){}
ngOnInit(): void {
  this.coronaSvc.isDarkModeActive.subscribe((newStatus)=>{
    this.isDarkModeActive=newStatus;
  })
  this.coronaSvc.isNavBarOpen.subscribe((newStatus)=>{
   this.isNavBarOpen=newStatus;
  })
}

toggleMode(){
this.isDarkModeActive=!this.isDarkModeActive
  this.coronaSvc.isDarkModeActive.next(this.isDarkModeActive)
}
}
