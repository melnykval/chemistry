//Капілярний тиск
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import {CalculationResultComponent} from "../shared/calculation-result/calculation-result.component";
//функція з форрмули ексель 
function calculateGas(A, C,  E ) {
  return 0.0000000011*(A-0.001)*C*C*11*E*0.7071067812;
}
@Component({
  selector: 'app-press',
  standalone: true,
  imports: [
    FormsModule,
    NgxMaskDirective,
    CalculationResultComponent],
  templateUrl: './press.component.html',
  styleUrl: './press.component.css'
})
export class PressComponent {
  A;
  C;
  E;

  result;
  resultError;

  clear() {
    this.resultError = false;
    this.A = null;
    this.C = null;
    this.E = null;
  }

  calc() {
    this.resultError = (!this.A || !this.C || !this.E);
    if (this.resultError) {
      return;
    }
    this.result = calculateGas(this.A,  this.C,  this.E).toFixed(3);
  }

}
