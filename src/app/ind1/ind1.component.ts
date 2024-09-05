import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ind1',
  templateUrl: './ind1.component.html',
  styleUrls: ['./ind1.component.css']
})
export class Ind1Component {
  @Input() value: number = 40; // Valor dinámico que se pasará al componente
  @Input() adver:boolean=false;

  getStrokeDasharray(): string {
    const circumference = 282.78; 
    const visibleLength = (this.value / 100) * circumference; 
    return `${visibleLength} ${circumference}`;
  }
}
