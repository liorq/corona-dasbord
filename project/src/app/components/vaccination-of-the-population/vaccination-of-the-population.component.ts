import { Component } from '@angular/core';

@Component({
  selector: 'app-vaccination-of-the-population',
  templateUrl: './vaccination-of-the-population.component.html',
  styleUrls: ['./vaccination-of-the-population.component.css','../deads/deads.component.css']
})
export class VaccinationOfThePopulationComponent {
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
