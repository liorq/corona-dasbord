import { Component } from '@angular/core';
import { titles1 } from 'src/app/utils/app.arrays';

@Component({
  selector: 'app-morbidity-and-hospitalizations',
  templateUrl: './morbidity-and-hospitalizations.component.html',
  styleUrls: ['./morbidity-and-hospitalizations.component.css','../deads/deads.component.css']
})
export class MorbidityAndHospitalizationsComponent {
  titles=titles1;
}
