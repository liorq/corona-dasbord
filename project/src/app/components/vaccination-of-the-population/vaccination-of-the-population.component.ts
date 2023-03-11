import { Component } from '@angular/core';
import { tableData2 } from 'src/app/app.arrays';

@Component({
  selector: 'app-vaccination-of-the-population',
  templateUrl: './vaccination-of-the-population.component.html',
  styleUrls: ['./vaccination-of-the-population.component.css','../deads/deads.component.css']
})
export class VaccinationOfThePopulationComponent {
  tableData2 =tableData2

}
