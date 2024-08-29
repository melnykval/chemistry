import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import {CalculationResultComponent} from "../shared/calculation-result/calculation-result.component";
//функція з форрмули ексель 
function calculateOil(D, E, H, F, C, G) {
  return ((D-E)-F)*H*100/0.8/(E-C)/G;
}
  @Component({
  selector: 'app-oil',
  standalone: true,
  imports: [
    FormsModule,
    NgxMaskDirective,
    CalculationResultComponent
  ],
  templateUrl: './oil.component.html',
  styleUrl: './oil.component.css'
})
export class OilComponent {
  D;
  C;
  E;
  F;
  G;
  H;

  result;
  resultError;

  clear() {
    this.resultError = false;
    this.D = null;
    this.E = null;
    this.C = null;
    this.F = null;
    this.G = null;
    this.H = null;
  }

  calc() {
    this.resultError = (!this.D || !this.E || !this.C || !this.F || !this.G || !this.H);
    if (this.resultError) {
      return;
    }
    this.result = calculateOil(this.D, this.E, this.C, this.F, this.G, this.H).toFixed(3);
  }
}
