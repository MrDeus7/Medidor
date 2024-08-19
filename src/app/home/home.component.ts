import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() value: number = 80; // Valor dinámico que se pasará al componente


  getStrokeDasharray(): string {
    const circumference = 282.78; 
    const visibleLength = (this.value / 100) * circumference; 
    return `${visibleLength} ${circumference}`;
  }
}
