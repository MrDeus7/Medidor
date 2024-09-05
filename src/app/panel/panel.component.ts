import { Component, Input } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ClimaService } from '../clima.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent {
  @Input() meterName: string = '';
  @Input() energyGenerated: number = 20; // Valor dinámico que se pasará al componente
  @Input() saving: number = 0;
  @Input() reducedCoEmissions: number = 0;

  weatherInfo: any = [];

  constructor(
    private dataService: DataServiceService,
    private clima: ClimaService,
    private toastr: ToastrService
  ) {
    this.getCurrentPosition();
  }

  getStrokeDasharray(): string {
    const circumference = 282.78;
    const visibleLength = (this.energyGenerated / 100) * circumference;
    return `${visibleLength} ${circumference}`;
  }

  getCurrentPosition() {
    this.clima.getLocation().then((resp) => {
      this.clima.getFromActualPosition(resp.lng, resp.lat).subscribe((data) => {
        this.weatherInfo = data;
        console.log(data)
        if(this.weatherInfo.weather[0].main==='Clouds'){
          this.toastr.warning(
            'Las condiciones climatologicas podrian afectar la generacion de energia del panel solar',
            '¡Advertencia!',
          );
        }
      });
    });
  }

  ngOnInit(): void {
  
    this.dataService.getPanelData$().subscribe({
      next: (data) => {
        console.log('Data received:', data);

        if (data) {
          this.meterName = data.meterName;
          this.energyGenerated = data.energyGenerated;
          this.saving = data.saving;
          this.reducedCoEmissions = data.reducedCoEmissions;
          
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
