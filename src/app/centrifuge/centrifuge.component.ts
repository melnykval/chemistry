import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import {CalculationResultComponent} from "../shared/calculation-result/calculation-result.component";
//функція з форрмули ексель 
function calculateCentrifuge(D, C, B) {
  return (D-B)/(C-B)*100;
}
@Component({
  selector: 'app-centrifuge',
  standalone: true,
  imports: [
    FormsModule,
    NgxMaskDirective,
    CalculationResultComponent
  ],
  templateUrl: './centrifuge.component.html',
  styleUrl: './centrifuge.component.css'
})
export class CentrifugeComponent {
 D;
 C;
 B;

  result;
  resultError;

  clear() {
    this.resultError = false;
    this.D = null;
    this.C = null;
    this.B = null;
  }

  calc() {
    this.resultError = (!this.D || !this.C || !this.B);
    if (this.resultError) {
      return;
    }
    this.result = calculateCentrifuge(this.D, this.C, this.B).toFixed(3);
  }
}
