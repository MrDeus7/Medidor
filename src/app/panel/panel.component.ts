import { Component, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input() meterName: string = "";
  @Input() energy: number = 20; // Valor dinámico que se pasará al componente
  @Input() cost: number = 0;
  @Input() coEmissions: number = 0;

  constructor(private dataService: DataServiceService){

  }

  getStrokeDasharray(): string {
    const circumference = 282.78; 
    const visibleLength = (this.energy / 100) * circumference; 
    return `${visibleLength} ${circumference}`;
  }

  

  btcPrices: number[] = [];
  
  ngOnInit(): void{
    this.dataService.getValues$().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        
        if (data) {
          
          this.meterName = data.meterName;
          this.energy = data.energy;
          this.cost = data.cost;
          this.coEmissions = data.coEmissions;

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
