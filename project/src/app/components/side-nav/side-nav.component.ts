import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { CoronaService } from '../../corona.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  sidenav?: ElementRef;
  isNavBarOpen?:boolean=this.coronaSvc.isNavBarOpen.getValue();
  constructor(private renderer: Renderer2, private el: ElementRef,private coronaSvc:CoronaService) {}

  ngOnInit() {



    this.sidenav = this.el.nativeElement.querySelector("#sidenav");
    this.renderer.listen(this.el.nativeElement.querySelector('#nav-toggle-btn'), 'click', () => {
    if(!this.isNavBarOpen){
      this.coronaSvc.isNavBarOpen.next(true);
      this.isNavBarOpen=true;
      this.renderer.addClass(this.sidenav, 'show');
      this.removeScrollBarPushing();
    }
    else{
      this.coronaSvc.isNavBarOpen.next(false);
      this.isNavBarOpen=false;
      this.renderer.removeClass(this.sidenav, 'show');

    const navToggleBtn = document.querySelector("#nav-toggle-btn");
    const dropdownItems = document.querySelectorAll(".dropdown-items");

    navToggleBtn?.addEventListener("click", () => {
      dropdownItems.forEach((item) => {
        item.classList.toggle("show");
      });
    });

    }


    });

    this.renderer.listen(this.el.nativeElement.querySelector('#sidenav .closebtn'), 'click', () => {
      this.renderer.removeClass(this.sidenav, 'show');
    });
  }

  removeScrollBarPushing() {
    const offsetY = document.documentElement.scrollTop;
    let i=0;
    const time = setInterval(() => {
      if (i++<2){
        clearInterval(time);
      }
      this.renderer.setProperty(document.documentElement, 'scrollTop', offsetY);
    }, 1);
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
