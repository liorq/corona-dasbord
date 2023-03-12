import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CoronaService } from './corona.service';
import {  ranges } from './utils/app.arrays';
import { IndicesOfGeneralMorbidityComponent } from './components/indices-of-general-morbidity/indices-of-general-morbidity.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {

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
    let index = 0;
    let newArray=[];
    let ArrayRanges: any=ranges;
    for (let item of components) {
      const rect = item?.getBoundingClientRect();
      const scrollY = window?.scrollY || window?.pageYOffset;
      const start =Math.floor(scrollY + rect?.top); // start position
      const end = Math.floor(scrollY + rect?.bottom); // end position

      //  console.log(index, item?.id, start, end);
       newArray[index]=`start in ${start} end in ${end} `
       ArrayRanges[index][0]=start;
       ArrayRanges[index][1]=end;
        console.log(index);
       index++;

    }
    console.log(newArray)
    console.log(ArrayRanges)

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
