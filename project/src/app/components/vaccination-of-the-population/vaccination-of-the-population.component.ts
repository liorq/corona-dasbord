import { Component } from '@angular/core';
import { links4, tableData2 } from 'src/app/utils/app.arrays';

@Component({
  selector: 'app-vaccination-of-the-population',
  templateUrl: './vaccination-of-the-population.component.html',
  styleUrls: ['./vaccination-of-the-population.component.css','../deads/deads.component.css']
})
export class VaccinationOfThePopulationComponent {
  tableData2 =tableData2
   links = links4;
}
