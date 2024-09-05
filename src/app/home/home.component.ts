import { Component, Input, ViewEncapsulation } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() meterName: string = '';
  @Input() energy: number = 20; // Valor dinámico que se pasará al componente
  @Input() cost: number = 0;
  @Input() coEmissions: number = 0;
  adver: boolean = false;
  const = 50;

  constructor(
    private dataService: DataServiceService,
    private toastr: ToastrService
  ) {}

  getStrokeDasharray(): string {
    const circumference = 282.78;
    const visibleLength = (this.energy / 100) * circumference;
    return `${visibleLength} ${circumference}`;
  }

  btcPrices: number[] = [];

  ngOnInit(): void {
  
    this.dataService.getValues$().subscribe({
      next: (data) => {
        console.log('Data received:', data);

        if (data) {
          this.meterName = data.meterName;
          this.energy = data.energy;
          this.cost = data.cost;
          this.coEmissions = data.coEmissions;

          //logica para la comparacion del consumo contra la generacion (alerta de alto consumo)
          if(data.energy>=10 && data.energy<12){
            this.toastr.warning(
              'La generacion del panel solar no es suficiente para abastecer a todos los dispositivos conectados',
              '¡Advertencia!',
              { timeOut: 10000, positionClass: 'toast-bottom-right' }
            );
            this.adver = true;
          }else if(data.energy>12){
            this.toastr.error(
              'El consumo de energia ha superado el promedio por dia',
              '¡Advertencia!',
              { timeOut: 10000, positionClass: 'toast-bottom-right' }
            );
            this.adver = true;
          }else{
            this.adver = false;
          }
        } else {
          console.warn('Data not found');
        }
      },
      error: (error) => {
        console.error('Error:', error);
      },
      complete: () => {
        console.log('Complete');
      },
    });
  }
}
