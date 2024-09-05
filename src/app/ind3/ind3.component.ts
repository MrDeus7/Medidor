import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ind3',
  templateUrl: './ind3.component.html',
  styleUrls: ['./ind3.component.css']
})
export class Ind3Component {
  @Input() value: number = 70; // Valor dinámico que se pasará al componente
  @Input() adver:boolean=false;

  getStrokeDasharray(): string {
    const circumference = 282.78; 
    const visibleLength = (this.value / 100) * circumference; 
    return `${visibleLength} ${circumference}`;
  }
}
