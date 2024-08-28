import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculation-result',
  standalone: true,
  imports: [],
  templateUrl: './calculation-result.component.html',
  styleUrl: './calculation-result.component.css'
})
export class CalculationResultComponent {
  @Input({ required: true }) result;
  @Input({ required: true }) resultLabel;
  @Input({ required: true }) resultDescription;
  @Input() resultError;
}