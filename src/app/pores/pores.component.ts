import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import {CalculationResultComponent} from "../shared/calculation-result/calculation-result.component";
//функція з форрмули ексель 
function calculatePores(P3 , P1, P2) {
  return ( P3 - P1 ) / ( P3 - P2 ) * 100;
}

@Component({
  selector: 'app-pores',
  standalone: true,
  imports: [
    FormsModule,
    NgxMaskDirective,
    CalculationResultComponent
  ],
  templateUrl: './pores.component.html',
  styleUrl: './pores.component.css'
})
export class PoresComponent {
  P1;
  P2;
  P3;

  result;
  resultError;
 
  clear() {
    this.resultError = false;
    this.P1 = null;
    this.P2 = null;
    this.P3 = null;
  }
  calc() {
    this.resultError = (!this.P1 || !this.P2 || !this.P3 );
    if (this.resultError) {
      return;
    }
    this.result = calculatePores(this.P1, this.P2, this.P3).toFixed(3);
  }
}
