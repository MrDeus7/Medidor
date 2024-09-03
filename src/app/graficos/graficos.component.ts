import { Component, AfterViewInit} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficosComponent {
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
        text: 'Consumo Diario',
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
        data: ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']
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
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Coste',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        },
        {
          name: 'Co2',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
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
        text: 'Consumo Semanal',
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
        data: ['Sem1', 'Sem2', 'Sem3', 'Sem4', 'Sem5', 'Sem6', 'Sem7']
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
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Coste',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        },
        {
          name: 'Co2',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
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
        text: 'Consumo Mensual',
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
        data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Ago','Sep','Oct','Nov','Dic']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'KWH',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Coste',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        },
        {
          name: 'Co2',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
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
        text: 'Consumo Anual',
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
        data: ['2023', '2024']
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
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Coste',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
          lineStyle: {
            color: 'transparent'  // Hacer la línea transparente
          },
          itemStyle: {
            opacity: 0  // Ocultar los puntos
          }
        },
        {
          name: 'Co2',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
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
