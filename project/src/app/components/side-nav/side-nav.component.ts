import { Component, OnInit } from '@angular/core';
import { CoronaService } from '../../corona.service';
import { SideItemComponent } from '../side-item/side-item.component';
import { sideNavData } from 'src/app/utils/app.arrays';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit {

  showDropdown: boolean[] = [false, false, false];
  isNavBarOpen?: boolean;
  sideNavData = sideNavData;
  constructor(
    private coronaSvc: CoronaService
  ) {}

ngOnInit(): void {
  this.coronaSvc.isNavBarOpen.subscribe((newStatus)=>{
  this.isNavBarOpen=newStatus;
  })
}

toggleNav() {
  const sidenav = document.getElementById('sidenav');
  this.isNavBarOpen ? this.coronaSvc.isNavBarOpen.next(false) : this.coronaSvc.isNavBarOpen.next(true);
  sidenav?.classList.toggle('show');
}

  openOptions(index: number) {
    this.showDropdown[index] = !this.showDropdown[index];
  }
}
