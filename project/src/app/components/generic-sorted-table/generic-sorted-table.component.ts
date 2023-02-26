import { Component } from '@angular/core';

@Component({
  selector: 'app-generic-sorted-table',
  templateUrl: './generic-sorted-table.component.html',
  styleUrls: ['./generic-sorted-table.component.css']
})
export class GenericSortedTableComponent {
  tableData1 = [
    { id: 34, name: '10%', age: '24%', email: 7.2, phone: 7.6, address: 'אילת' },
    { id: 63, name: '30%', age: '24%', email: 4.2, phone: 2.2, address: 'מודיעין' },
    { id: 257, name: '0%', age: '30%', email: 2.2, phone: 5.2, address: 'ירושלים' },
    { id: 29, name: '20%', age: '24%', email: 4.2, phone: 4.2, address: 'תל אביב' },
  ];

   tableData2 = [
    {
      address: "אלון שבות",
      phone: "מעל 90%",
      email: "84.76%",
      age: "66.44%",
      name: "אין מידע",
      id: 2
    },
    {
      address: "הר אדר",
      phone: "מעל 90%",
      email: "89.8%",
      age: "72.69%",
      name: "אין מידע",
      id: 3.1
    },
    {
      address: "חשמונאים",
      phone: "מעל 90%",
      email: "מעל 90%",
      age: "82.3%",
      name: "אין מידע",
      id: 2
    },
    {
      address: "מזכרת בתיה",
      phone: "מעל 90%",
      email: "86.3%",
      age: "66.72%",
      name: "אין מידע",
      id: 4.2
    }
  ];
}
