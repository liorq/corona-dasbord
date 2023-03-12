import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CoronaService } from './corona.service';
import { rangesAbove790px, rangesDown790px } from './utils/app.arrays';
import { IndicesOfGeneralMorbidityComponent } from './components/indices-of-general-morbidity/indices-of-general-morbidity.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
   @ViewChild('IndicesofgeneralmorbidityComponent') myComponent?:ElementRef;

  isNavBarOpen=false;
  isDarkModeActive = false;
  ranges:any[]=[];
  constructor(private router: Router, private elementRef: ElementRef, public coronaSvc: CoronaService) { }
  currentPosition?: number;
  ngAfterViewInit() {
    // console.log(document.querySelector('.components')?.getBoundingClientRect());
    const components:any= document.querySelectorAll('.components');
    let index = 0;
    for (let item of components) {
      const rect = item.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const start = scrollY + rect.top; // start position
      const end = scrollY + rect.bottom; // end position

      console.log(index, item.id, start, end);
      index++;
    }


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
    console.log()
    let ranges: any=[]
     if(window.innerWidth>790)
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

  }

  scrollToDiv(divName: string) {
    const div = document.getElementById(divName);
    if (div) div?.scroll({ behavior: 'smooth' });
  }

}
