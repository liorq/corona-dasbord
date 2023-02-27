import { Component } from '@angular/core';

@Component({
  selector: 'app-lights-in-settlements',
  templateUrl: './lights-in-settlements.component.html',
  styleUrls: ['./lights-in-settlements.component.css','../deads/deads.component.css']
})
export class LightsInSettlementsComponent {
  tableData1 = [
    { id: 34, name: '10%', age: '24%', email: 7.2, phone: 7.6, address: 'אילת' },
    { id: 63, name: '30%', age: '24%', email: 4.2, phone: 2.2, address: 'מודיעין' },
    { id: 257, name: '0%', age: '30%', email: 2.2, phone: 5.2, address: 'ירושלים' },
    { id: 29, name: '20%', age: '24%', email: 4.2, phone: 4.2, address: 'תל אביב' },
  ];
}
