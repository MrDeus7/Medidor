import { Component, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ind1',
  templateUrl: './ind1.component.html',
  styleUrls: ['./ind1.component.css']
})
export class Ind1Component {
  @Input() meterName: string = '';
  @Input() energyConsumed: number = 0; // Valor dinámico que se pasará al componente
  @Input() cost: number = 0;
  @Input() coEmissionsGenerated: number = 0;
  @Input() value: number = 40; // Valor dinámico que se pasará al componente
  @Input() adver:boolean=false;

  constructor(
    private dataService: DataServiceService,
    private toastr: ToastrService
  ) {}

  getStrokeDasharray(): string {
    const circumference = 282.78; 
    const visibleLength = (this.value / 100) * circumference; 
    return `${visibleLength} ${circumference}`;
  }

  ngOnInit(): void {
  
    this.dataService.getIndividualValues$().subscribe({
      next: (data) => {
        console.log('Data received:', data);

        if (data) {
          this.meterName = data.meterName;
          this.energyConsumed = data.energyConsumed;
          this.cost = data.cost;
          this.coEmissionsGenerated = data.coEmissionsGenerated;
          
          //logica para la comparacion del consumo contra la generacion (alerta de alto consumo)
          if(data.energyConsumed>=10 && data.energyConsumed<12){
            this.toastr.warning(
              'La generacion del panel solar no es suficiente para abastecer a todos los dispositivos conectados',
              '!Advertencia¡',
              { timeOut: 10000, positionClass: 'toast-bottom-right' }
            );
            this.adver = true;
          }else if(data.energyConsumed>12){
            this.toastr.error(
              'El consumo de energia ha superado el promedio por dia',
              '!Advertencia¡',
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
