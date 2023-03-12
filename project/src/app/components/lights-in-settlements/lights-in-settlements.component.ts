import { Component } from '@angular/core';
import { tableData1 } from 'src/app/utils/app.arrays';

@Component({
  selector: 'app-lights-in-settlements',
  templateUrl: './lights-in-settlements.component.html',
  styleUrls: ['./lights-in-settlements.component.css','../deads/deads.component.css']
})
export class LightsInSettlementsComponent {
  tableData1 = tableData1
}
