import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import {CalculationResultComponent} from "../shared/calculation-result/calculation-result.component";
//функція з форрмули ексель 
function calculateWax(P3 , P1, P2) {
  return (P1*0.9982*0.9)/((P2-P3)*0.9-(P2-P1)*0.9982);
}
@Component({
  selector: 'app-wax',
  standalone: true,
  imports: [
    FormsModule,
    NgxMaskDirective,
    CalculationResultComponent
  ],
  templateUrl: './wax.component.html',
  styleUrl: './wax.component.css'
})
export class WaxComponent {
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
    this.result = calculateWax(this.P1, this.P2, this.P3).toFixed(3);
  }
}
