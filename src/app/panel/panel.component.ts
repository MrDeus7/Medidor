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
  @Input() energy: number = 20; // Valor dinámico que se pasará al componente
  @Input() cost: number = 0;
  @Input() coEmissions: number = 0;

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
    const visibleLength = (this.energy / 100) * circumference;
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
}
