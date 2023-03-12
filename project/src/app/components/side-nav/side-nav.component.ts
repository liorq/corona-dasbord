import { Component, Renderer2, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { CoronaService } from '../../corona.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {

  showDropdown: boolean[] = [false, false, false];
  isNavBarOpen?: boolean;
  constructor(
    private coronaSvc: CoronaService
  ) {}

ngOnInit(): void {
  this.coronaSvc.isNavBarOpen.subscribe((newStatus)=>{
  this.isNavBarOpen=newStatus;
  this.coronaSvc.isNavBarOpen.next(newStatus);
  })
}

toggleNav(){
   const sidenav =document.getElementById('sidenav')
        if (!this.isNavBarOpen)
          this.coronaSvc.isNavBarOpen.next(true);
          else
          this.coronaSvc.isNavBarOpen.next(false);

        sidenav?.classList.toggle('show')
      }

  openOptions(index: number) {
    this.showDropdown[index] = !this.showDropdown[index];
  }
}
