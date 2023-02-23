import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { idAnchors } from 'src/app/app.data';
import { CoronaService } from 'src/app/corona.service';

@Component({
  selector: 'app-anchor-list',
  templateUrl: './anchor-list.component.html',
  styleUrls: ['./anchor-list.component.css']
})
export class AnchorListComponent  implements OnInit{
  componentNameActive:string='';
  anchors=idAnchors;

constructor(private coronaSvc:CoronaService,private router: Router,private elementRef: ElementRef){}
  ngOnInit(): void {
    this.coronaSvc.componentNameActive.subscribe((newName)=>{
      this.componentNameActive=newName;
    })


  }
 onclick(anchor:string){
  this.coronaSvc.componentNameActive.next(anchor)
 }
}
