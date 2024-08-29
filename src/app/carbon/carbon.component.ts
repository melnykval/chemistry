import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import {CalculationResultComponent} from "../shared/calculation-result/calculation-result.component";
//функція з форрмули ексель 
function calculateCarbon(C, D, E) {
  return (D*E)/(C*4.4);
}
@Component({
  selector: 'app-carbon',
  standalone: true,
  imports: [
    FormsModule,
    NgxMaskDirective,
    CalculationResultComponent
  ],
  templateUrl: './carbon.component.html',
  styleUrl: './carbon.component.css'
})
export class CarbonComponent {
  D;
  E;
  C;

  result;
  resultError;
 
  clear() {
    this.resultError = false;
    this.D = null;
    this.E = null;
    this.C = null;
  }
  calc() {
    this.resultError = (!this.D || !this.C || !this.E );
    if (this.resultError) {
      return;
    }
    this.result = calculateCarbon(this.D, this.C, this.E).toFixed(3);
  }
}
