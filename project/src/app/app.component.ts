import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CoronaService } from './corona.service';
import { rangesAbove790px, rangesDown790px } from './app.arrays';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  isNavBarOpen=false;
  isDarkModeActive = false;
  ranges:any[]=[];
  constructor(private router: Router, private elementRef: ElementRef, public coronaSvc: CoronaService) { }
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
    this.currentPosition = window.scrollY;
   console.log(Math.floor(this.currentPosition))


    let ranges: any=[]
     if(window.innerWidth<790)
     ranges =rangesAbove790px;
     else
     ranges=rangesDown790px;

    for (const range of ranges) {
      if (range == null) continue;

      if (this.currentPosition >= range[0] && this.currentPosition < range[1]) {
        this.coronaSvc.componentNameActive.next(range[2]);
        this.scrollToDiv(range[2]);
        break;
      }
    }
  }

  @HostListener('window:wheel', ['$event'])
  onWindowWheel(event: any) {
    const sections: any = document.querySelectorAll('section');

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const diff = scrollY + window.innerHeight - rect.bottom;

      // Check if the bottom of the section is within 200 pixels of the bottom of the screen
      if (diff > -200 && diff <50) {
        this.coronaSvc.componentNameActive.next(section.getAttribute('data-name'));
        this.scrollToDiv(section.getAttribute('data-name'));
        break;
      }
    }
  }

  scrollToDiv(divName: string) {
    const div = document.getElementById(divName);
    if (div) div?.scrollTo({ behavior: 'smooth' });
  }

}
