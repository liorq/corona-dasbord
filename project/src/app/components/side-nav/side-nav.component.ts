import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
import { CoronaService } from '../../corona.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements AfterViewInit {

  sidenav?: ElementRef;
  isNavBarOpen?:boolean=this.coronaSvc.isNavBarOpen.getValue();
  constructor(private renderer: Renderer2, private el: ElementRef,private coronaSvc:CoronaService) {}

  ngAfterViewInit() {

    this.sidenav = this.el.nativeElement.querySelector("#sidenav");
    this.renderer.listen(this.el.nativeElement.querySelector('#nav-toggle-btn'), 'click', () => {
    if(!this.isNavBarOpen){
      this.coronaSvc.isNavBarOpen.next(true);
      this.isNavBarOpen=true;
      this.renderer.addClass(this.sidenav, 'show');
    }
    else{
      this.coronaSvc.isNavBarOpen.next(false);
      this.isNavBarOpen=false;
      this.renderer.removeClass(this.sidenav, 'show');
    }
    });


  }

   toggleNav(para:string) {
    var navbar = document.getElementById(para);
    navbar?.classList.toggle("show");
  }
  showDropdown: boolean[] = [false, false, false];

  openOptions(index: number) {
    this.showDropdown[index] = !this.showDropdown[index];
  }
}
