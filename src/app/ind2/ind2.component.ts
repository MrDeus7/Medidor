import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ind2',
  templateUrl: './ind2.component.html',
  styleUrls: ['./ind2.component.css']
})
export class Ind2Component {
  @Input() value: number = 50; // Valor dinámico que se pasará al componente


  getStrokeDasharray(): string {
    const circumference = 282.78; 
    const visibleLength = (this.value / 100) * circumference; 
    return `${visibleLength} ${circumference}`;
  }
}
