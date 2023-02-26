import { Component } from '@angular/core';
import { threeOption } from 'src/app/app.graphData';

@Component({
  selector: 'app-effect-of-vaccination-on-morbidity',
  templateUrl: './effect-of-vaccination-on-morbidity.component.html',
  styleUrls: ['./effect-of-vaccination-on-morbidity.component.css']
})
export class EffectOfVaccinationOnMorbidityComponent {
  option: echarts.EChartsOption|any=threeOption();

}
