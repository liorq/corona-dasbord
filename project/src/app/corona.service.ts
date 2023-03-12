import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
componentNameActive=new BehaviorSubject<string>('')
isDarkModeActive=new BehaviorSubject<boolean>(false);
isNavBarOpen=new BehaviorSubject<boolean>(false);
timePeriodsInDays=new BehaviorSubject<number[]>([25,25,25,25])
///timePeriodsInDays-obj
}
