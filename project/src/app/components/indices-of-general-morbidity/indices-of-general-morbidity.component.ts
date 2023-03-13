import { Component } from '@angular/core';
import { titles3 } from 'src/app/utils/app.arrays';

@Component({
  selector: 'app-indices-of-general-morbidity',
  templateUrl: './indices-of-general-morbidity.component.html',
  styleUrls: ['./indices-of-general-morbidity.component.css','../deads/deads.component.css']
})
export class IndicesOfGeneralMorbidityComponent {
titles=titles3
}
