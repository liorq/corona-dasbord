import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CoronaService } from './corona.service';
import {  ranges } from './utils/app.arrays';
import { IndicesOfGeneralMorbidityComponent } from './components/indices-of-general-morbidity/indices-of-general-morbidity.component';
import { idAnchors } from './utils/app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  componentsId=['רמזור בישובים', 'התחסנות האוכלוסיה', 'תחלואה חוזרת ומחלימים', 'תחקורים נוספים', 'בדיקות', 'נפטרים', 'חולים קשה ומאושפזים', 'השפעת התחסנות על התחלואה', 'תחלואה מחול', 'תחלואה ואשפוזי ילדים', 'מדדי תחלואה כללית', 'מדדים מרכזיים', 'מבט על' ]

  isNavBarOpen?:boolean;
  isDarkModeActive?:boolean;
  ranges:any[]=[];
  constructor(public coronaSvc: CoronaService) { }
  currentPosition?: number;
  ngAfterViewInit() {

    this.coronaSvc.isDarkModeActive.subscribe((newStatus: boolean) => {
      this.isDarkModeActive = newStatus;
    })
    this.coronaSvc.isNavBarOpen.subscribe((newStatus: boolean) => {
      this.isNavBarOpen = newStatus;
    })
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const components:any= document.querySelectorAll('.components');
    const newArray:any=[];
    let index=0;
    components.forEach((item: any) => {
      const rect = item?.getBoundingClientRect();
      const scrollY = window?.scrollY || window?.pageYOffset;
      const start = Math.floor(scrollY + (rect?.top ?? 0)); // Use optional chaining and nullish coalescing
      const end = Math.floor(scrollY + (rect?.bottom ?? 0)); // Use optional chaining and nullish coalescing

      newArray.push([start-265, end-265,this.componentsId[this.componentsId.length-1-index]]);
      index++;
    });

    console.log(newArray)
    console.log(window?.scrollY)


    this.currentPosition = window?.scrollY;



    for (const range of ranges) {
      if (range == null) continue;

      if (this.currentPosition >= range[0] && this.currentPosition < range[1]) {
        this.coronaSvc.componentNameActive.next(range[2]);
        this.scrollToDiv(range[2]);
        break;
      }
    }
  }

  scrollToDiv(divName: string) {
    const div = document.getElementById(divName);
    if (div) div?.scroll({ behavior: 'smooth' });
  }

}
