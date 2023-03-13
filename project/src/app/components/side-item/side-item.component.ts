import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-item',
  templateUrl: './side-item.component.html',
  styleUrls: ['./side-item.component.css']
})
export class SideItemComponent {
@Input() showDropdownPosition:number=0;
@Input() ContainerTitle:string="";;
@Input() ContainerId:string="";;
@Input() dropDownOptions:any=["","",""];
showDropdown: boolean[] = [false, false, false];
openOptions(index: number) {
  this.showDropdown[index] = !this.showDropdown[index];
}
}
