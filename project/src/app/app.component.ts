import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { CoronaService } from './corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  isNavBarOpen=false;
  isDarkModeActive = false;
  constructor(private router: Router, private elementRef: ElementRef, public coronaSvc: CoronaService) { }
  currentPosition?: number; // window.pageYOffset Initialize to current scroll position
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

    const ranges: any = [
      [0, 400, 'מבט על'],
      [401, 1501, 'מדדים מרכזיים'],
      [1502, 2322, 'מדדי תחלואה כללית'],
      [2322, 4257, 'תחלואה ואשפוזי ילדים'],
      [4258, 5788, 'תחלואה מחול'],
      [5789, 6988, 'חולים קשה ומאושפזים'],
      [6989, 7772, 'נפטרים'],
      [7775, 9372, 'בדיקות'],
      [9372, 10881, 'תחקורים נוספים'],
      [10881, 12072, 'תחלואה חוזרת ומחלימים'],
      [12072, 14033, 'התחסנות האוכלוסיה'],
      [14033, 15233, 'רמזור בישובים']
    ];

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
    if (div) div?.scrollIntoView({ behavior: 'smooth' });
  }

}
