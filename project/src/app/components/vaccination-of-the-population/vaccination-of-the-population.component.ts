import { Component } from '@angular/core';

@Component({
  selector: 'app-vaccination-of-the-population',
  templateUrl: './vaccination-of-the-population.component.html',
  styleUrls: ['./vaccination-of-the-population.component.css','../deads/deads.component.css']
})
export class VaccinationOfThePopulationComponent {
  tableData2 = [
    {
      address: 2,
      phone: "אין מידע",
      email: "66.44%",
      age: "84.76%",
      name: "מעל 90%",
      id: "אלון שבות"
                  // address
      // phone
      // email
      // age
      // name
      // id
    },
    {
      address: 3.1,
      phone: "אין מידע",
      email: "72.69%",
      age: "89.8%",
      name: "מעל 90%",
      id: "הר אדר"


    },
    {
      address: 2,
      phone: "אין מידע",
      email: "82.3%",
      age: "מעל 90%",
      name: "מעל 90%",
      id: "חשמונאים"



    },
    {

      address: 4.2,
      phone: "אין מידע",
      email: "66.72%",
      age: "86.3%",
      name: "מעל 90%",
      id: "מזכרת בתיה"

      // address
      // phone
      // email
      // age
      // name
      // id
    }
  ];

}
