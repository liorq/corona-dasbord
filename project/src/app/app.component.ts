import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IndicesOfGeneralMorbidityComponent } from './components/indices-of-general-morbidity/indices-of-general-morbidity.component';
import { MajorIndicatorsComponent } from './components/major-indicators/major-indicators.component';
import { SummaryOf7DaysComponent } from './components/summary-of7-days/summary-of7-days.component';
import { CoronaService } from './corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router, private elementRef: ElementRef,private coronaSvc:CoronaService) {}
  currentPosition: number = 0;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event:any) {
    this.currentPosition = window.scrollY;
    // console.log(this.currentPosition)
    const num=this.currentPosition

  const ranges:any = [    [0, 400, "מבט על"],
  [401, 1501, "מדדים מרכזיים"],
  [1502, 2322, "מדדי תחלואה כללית"],
  [2322, 4257, "תחלואה ואשפוזי ילדים"],
  [4258, 5788, "תחלואה מחול"],
  [5789, 6988, "חולים קשה ומאושפזים"],
  [6989, 7772, "נפטרים"],
  [7775, 9372, "בדיקות"],
  [9372, 10881, "תחקורים נוספים"],
  [10881, 12072, "תחלואה חוזרת ומחלימים"],
  [12072, 14033, "התחסנות האוכלוסיה"],
  [14033, 15233, "רמזור בישובים"]
];

for (const range of ranges) {
  if (num >= range[0] && num < range[1]) {
    console.log(range[2]);
    this.coronaSvc.componentNameActive.next(range[2])
    this.scrollToDiv(range[2])
    break;
  }
}

  }
   scrollToDiv(divName:string) {
    var div = document.getElementById(divName);
    div?.scrollIntoView({ behavior: 'smooth' });
  }
}
