import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {catchError, map, of, pipe, tap} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
componentNameActive=new BehaviorSubject<string>('')
isDarkModeActive=new BehaviorSubject<boolean>(false);
isNavBarOpen=new BehaviorSubject<boolean>(false);
timePeriodsInDays=new BehaviorSubject<number[]>([25,25,25,25])
///timePeriodsInDays-obj


// getObserve(){
//   const obs= this.isNavBarOpen.asObservable()
//   obs.pipe(
//     map((value)=>{
//       return !value
//     }),
//     tap(()=>{
//       console.log('hi')
//     }),
//     catchError(()=>{
//       return of(true)
//     })
//   )
// }
}

