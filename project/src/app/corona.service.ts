import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { firstOption, fourOption, secondOption, threeOption } from './app.graphData';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {
componentNameActive=new BehaviorSubject<string>('')
isDarkModeActive=new BehaviorSubject<boolean>(false);
isNavBarOpen=new BehaviorSubject<boolean>(false);
  constructor() { }


  switchGraphsToDarkMode(graphName:string,timePeriod:number,emphasis?:{}){
    switch(graphName){
      case 'firstGraph':return firstOption(timePeriod,true);
      case 'secondGraph':return secondOption(emphasis,timePeriod,true);
      case 'threeGraph':return threeOption(timePeriod,true);
      case 'fourGraph':return fourOption(timePeriod,true);
    }
    return
  }
}
