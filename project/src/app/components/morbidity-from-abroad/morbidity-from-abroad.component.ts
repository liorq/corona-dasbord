import { Component } from '@angular/core';
import { linksData2 } from 'src/app/utils/app.arrays';

@Component({
  selector: 'app-morbidity-from-abroad',
  templateUrl: './morbidity-from-abroad.component.html',
  styleUrls: ['./morbidity-from-abroad.component.css','../deads/deads.component.css']
})
export class MorbidityFromAbroadComponent {
  links = linksData2;
}
