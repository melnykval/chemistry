import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import {CalculationResultComponent} from "../shared/calculation-result/calculation-result.component";
//функція з форрмули ексель 
function calculateVolume(P1, gasDensity, P2, P3) {
  return gasDensity * P1 / ( P3 - P2 );
}
@Component({
  selector: 'app-volume',
  standalone: true,
  imports: [
    FormsModule,
    NgxMaskDirective,
    CalculationResultComponent
  ],
  templateUrl: './volume.component.html',
  styleUrl: './volume.component.css'
})
export class VolumeComponent {
  P1;
  gasDensity;
  P3;
  P2;

  result;
  resultError;

  clear() {
    this.resultError = false;
    this.P1 = null;
    this.gasDensity = null;
    this.P3 = null;
    this.P2 = null;

  }

  calc() {
    this.resultError = (!this.P1 || !this.gasDensity || !this.P2 || !this.P3);
    if (this.resultError) {
      return;
    }
    this.result = calculateVolume(this.P1, this.gasDensity, this.P2, this.P3).toFixed(3);
  }
}
