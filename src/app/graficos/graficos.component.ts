import { Component, AfterViewInit, Input} from '@angular/core';
import * as echarts from 'echarts';
import { DataServiceService } from '../data-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
  

  @Input () titulo: string="" ;

 
  dailyData: any[] = [];
  weeklyData: any[] = [];
  monthlyData: any[] = [];
  annualData: any[] = [];

  Daily: any[] = [];

  constructor(private dataService: DataServiceService, private toastr: ToastrService){}

  ngOnInit(): void{
    this.dataService.getDailyData$().subscribe(data => {
      console.log('Datos: ', data);
      this.dailyData = data;
      this.initChart();
    });

    this.dataService.getWeeklyData$().subscribe(data => {
      console.log('Datos: ', data);
      this.weeklyData = data;
      this.initChart();
    });

    this.dataService.getMonthlyData$().subscribe(data => {
      console.log('Datos: ', data);
      this.monthlyData = data;
      this.initChart();
    });

    this.dataService.getAnnualData$().subscribe(data => {
      console.log('Datos: ', data);
      this.annualData = data;
      this.initChart();
    });
  }


  ngAfterViewInit(): void {
    this.initChart();
  }


  initChart(): void {

    const chartDom = document.getElementById('graf')!;
    const myChart1 = echarts.init(chartDom, 'dark');

    const chartDomsem = document.getElementById('grafsem')!;
    const myChart2 = echarts.init(chartDomsem, 'dark');

    const chartDomMen = document.getElementById('grafMen')!;
    const myChart3 = echarts.init(chartDomMen, 'dark');

    const chartDomsemAN = document.getElementById('grafAn')!;
    const myChart4 = echarts.init(chartDomsemAN, 'dark');

//opciones del grafico 1
    const option: echarts.EChartsOption = {
      backgroundColor: '#f0f0f0',
      title: {
        text: `${this.titulo} Diario`,
        textStyle: {
          color: '#000000'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jue', 'Vie', 'Sab', 'Dom', 'Lun', 'Mar', 'Mie']
      },axisLine: {
        lineStyle: {
          color: '#000000' // Color de la línea del eje X
        }
      },
      axisLabel: {
        color: '#000000' // Color de los días (etiquetas del eje X)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'KWH',
          type: 'line',
          stack: 'Total',
          data: this.dailyData.map(item => item.energyConsumed)
        },
        {
          name: 'COSTO',
          type: 'line',
          stack: 'Total',
          data: this.dailyData.map(item => item.cost),
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        },
        {
          name: 'CO2',
          type: 'line',
          stack: 'Total',
          data: this.dailyData.map(item => item.coEmissionsGenerated),
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        }
      ]
    };

    //opciones del grafico dos
    const option1: echarts.EChartsOption = {
      backgroundColor: '#f0f0f0',
      title: {
        text: `${this.titulo} Semanal`,
        textStyle: {
          color: '#000000'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Sem 29', 'Sem 30', 'Sem 31', 'Sem 32', 'Sem 33', 'Sem 34', 'Sem 35']
      },axisLine: {
        lineStyle: {
          color: '#000000' // Color de la línea del eje X
        }
      },
      axisLabel: {
        color: '#000000' // Color de los días (etiquetas del eje X)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'KWH',
          type: 'line',
          stack: 'Total',
          data: this.weeklyData.map(item => item.energyConsumed)
        },
        {
          name: 'COSTO',
          type: 'line',
          stack: 'Total',
          data: this.weeklyData.map(item => item.cost),
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        },
        {
          name: 'CO2',
          type: 'line',
          stack: 'Total',
          data: this.weeklyData.map(item => item.coEmissionsGenerated),
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        }
      ]
    };

    const option2: echarts.EChartsOption = {
      backgroundColor: '#f0f0f0',
      title: {
        text:  `${this.titulo} Mensual`,
        textStyle: {
          color: '#000000'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },axisLine: {
        lineStyle: {
          color: '#000000' // Color de la línea del eje X
        }
      },
      axisLabel: {
        color: '#000000' // Color de los días (etiquetas del eje X)
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'KWH',
          type: 'line',
          stack: 'Total',
          data: this.monthlyData.map(item => item.energyConsumed)
        },
        {
          name: 'COSTO',
          type: 'line',
          stack: 'Total',
          data: this.monthlyData.map(item => item.cost),
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        },
        {
          name: 'CO2',
          type: 'line',
          stack: 'Total',
          data: this.monthlyData.map(item => item.coEmissionsGenerated),
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        }
      ]
    };

    
    const option3: echarts.EChartsOption = {
      backgroundColor: '#f0f0f0',
      title: {
        text:  `${this.titulo} Anual`,
        textStyle: {
          color: '#000000'
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
      },axisLine: {
        lineStyle: {
          color: '#000000' // Color de la línea del eje X
        }
      },
      axisLabel: {
        color: '#000000' // Color de los días (etiquetas del eje X)
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'KWH',
          type: 'line',
          stack: 'Total',
          data: this.annualData.map(item => item.energyConsumed)
        },
        {
          name: 'COSTO',
          type: 'line',
          stack: 'Total',
          data: this.annualData.map(item => item.cost),
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        },
        {
          name: 'CO2',
          type: 'line',
          stack: 'Total',
          data: this.annualData.map(item => item.coEmissionsGenerated),
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        }
      ]
    };

    // Establece la opción de los graficos
    myChart1.setOption(option);
    myChart2.setOption(option1);
    myChart3.setOption(option2);
    myChart4.setOption(option3);
  }
}
