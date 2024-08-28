import { Component, Input } from '@angular/core';
import { Socket } from 'ngx-socket-io';
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
  ethPrices: number[] = [];
  
  ngOnInit(): void{
    this.dataService.getPrices$().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        
        if (data && data.data) {
          const btcData = data.data.find((item: any) => item.name === 'BTC');
          const ethData = data.data.find((item: any) => item.name === 'ETH');

          if (btcData && btcData.prices) {
            this.btcPrices = btcData.prices[btcData.prices.length-1][0];
            
            
            this.value = btcData.prices[btcData.prices.length-1][0].toString().charAt(9)+btcData.prices[btcData.prices.length-1][0].toString().charAt(10);
          } else {
            console.warn('BTC data or prices not found');
          }

          if (ethData && ethData.prices) {
            this.ethPrices = ethData.prices[btcData.prices.length-1][0];
          } else {
            console.warn('ETH data or prices not found');
          }

          console.log('BTC Prices:', this.btcPrices);
          console.log('ETH Prices:', this.ethPrices);
        } else {
          console.warn('Data format is incorrect');
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
