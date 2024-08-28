import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import {CalculationResultComponent} from "../shared/calculation-result/calculation-result.component";
//функція з форрмули ексель 
function calculateGas(counter, time, l, diameter, pop, tPop, po) {
  return ((counter / time) * (l * pop * tPop * 4))  / (po * diameter * diameter * Math.PI);
}

@Component({
  selector: 'app-gas',
  standalone: true,
  imports: [
    FormsModule,
    NgxMaskDirective,
    CalculationResultComponent
  ],
  templateUrl: './gas.component.html',
  styleUrl: './gas.component.css'
})
export class GasComponent {
  //переписати перелік всіх параметрів обов'язково
  counter;
  time;
  l;
  diameter;
  pop;
  tPop;
  po = 3.871;

  result;
  resultError;

  clear() {
    this.resultError = false;
    this.counter = null;
    this.time = null;
    this.l = null;
    this.diameter = null;
    this.pop = null;
    this.tPop = null;
    this.po = 3.871;
  }

  calc() {
    this.resultError = (!this.counter || !this.time || !this.l || !this.diameter || !this.pop || !this.tPop || !this.po);
    if (this.resultError) {
      return;
    }
    this.result = calculateGas(this.counter, this.time, this.l, this.diameter, this.pop, this.tPop, this.po).toFixed(3);
  }
}