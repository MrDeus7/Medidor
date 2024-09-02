import { Component, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  @Input() value: number = 20; // Valor dinámico que se pasará al componente

  constructor(private dataService: DataServiceService){

  }

  getStrokeDasharray(): string {
    const circumference = 282.78; 
    const visibleLength = (this.value / 100) * circumference; 
    return `${visibleLength} ${circumference}`;
  }

  

  btcPrices: number[] = [];
  
  ngOnInit(): void{
    this.dataService.getValues$().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        
        if (data) {

            this.value = data.corriente;
          
          } else {

            console.warn('Data not found');

          }
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Complete');
      }
    });
  }

}
