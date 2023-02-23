export function  firstOption(){
  const colors = ['#237d7d', '#ff9482', '#EE6666','#595d62'];

 return  {
    color: colors,

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      },
    },
    grid: {
      right: '10%'
    },
    toolbox: {

    },
    legend: {
      data: [ 'Precipitation', 'ממוצע נע נפטרים'],right: 10,
      top: 'middle',
      orient: 'vertical',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
        // prettier-ignore
           data: [
          '19.01', '20.01', '21.01', '22.01', '23.01',
          '24.01', '25.01', '26.01', '27.01', '28.01',
          '29.01', '30.01', '31.01', '01.02', '02.02',
          '03.02', '04.02', '05.02', '06.02', '07.02',
          '08.02', '09.02', '10.02', '11.02', '12.02',
          '13.02', '14.02', '15.02', '16.02'
        ]
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: false,
          lineStyle: {
            color:''
          }
        },
        axisLabel: {
          formatter: '{value} '
        }
      },
      {
        type: 'value',
        name: 'Precipitation',
        position: 'right',
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          formatter: '{value} '
        }
      },
      {
        type: 'value',
        name: '',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[3]
          }
        },
        axisLabel: {
          formatter: '{value} '
        }
      }
    ],
    series: [
      {
        name: 'נפטרים',
        type: 'bar',
        barWidth: 6.5, // change this value to adjust the bar width

        data: [
          2.0, 4.9, 2.0, 4.2, 8.6, 8.7, 5.6, 7.2, 8.6, 6.0, 6.4, 3.3,2.0, 4.9, 2.0, 4.2, 8.6, 8.7, 5.6, 7.2, 8.6, 6.0, 6.4, 3.3,   2.0, 4.9, 2.0, 4.2, 8.6, 8.7, 5.6, 7.2, 8.6, 6.0, 6.4, 3.3,2.0, 4.9, 2.0, 4.2, 8.6, 8.7, 5.6, 7.2, 8.6, 6.0, 6.4, 3.3
        ]
      },   {
        name: 'ממוצע נפטרים',
        type: 'line',
        yAxisIndex: 2,
        data: [5.0, 5.2, 5.3, 4.5, 5.3, 5.2, 5.3, 5.4, 5.0, 5.5, 5.0, 5.2, 5.3, 4.5, 5.3, 5.2, 5.3, 5.4, 5.0, 5.5, 5.0, 5.2, 5.3, 4.5, 5.3, 5.2, 5.3, 5.4, 5.0, 5.5,]
        ,symbolSize: 7 // Add this line to set the symbol size
       , itemStyle: {

          normal: {
            color: '#ff9482',
            borderColor: '#ff9482',

          },
          emphasis: {
            color: '#fff',
            borderColor: '#ff9482',
            borderWidth: 6,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}

export function  secondOption(emphasisStyle:any){
  return  {
    title: {
      subtext: 'מספר הבדיקות לפי תאריך',
      show: false
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['', '', '', ''],
    },
    grid: {
      left: '1%',
      right: '1%',
      bottom: '1%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '19.01', '20.01', '21.01', '22.01', '23.01',
        '24.01', '25.01', '26.01', '27.01', '28.01',
        '29.01', '30.01', '31.01', '01.02', '02.02',
        '03.02', '04.02', '05.02', '06.02', '07.02',
        '08.02', '09.02', '10.02', '11.02', '12.02',
        '13.02', '14.02', '15.02', '16.02'
      ]   },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'בדיקות PCR',

        type: 'bar',
        stack: 'one',
        barWidth: 6
,
        data: [5, 7, 6, 8, 9, 10, 7, 8, 9, 10,5, 7, 6, 8, 9, 10, 7, 8, 9, 10,5, 7, 6, 8, 9, 10, 7, 8, 9, 10],
        emphasis: emphasisStyle,
        itemStyle: {
          color: '#50cbfd',
        }
      },
      {
        name: 'אנטיגן מוסדי',
        type: 'bar',
        stack: 'one',
        barWidth: 6 ,
        data: [6, 6.5, 7, 7, 7.5, 8, 8, 8.5, 9, 9,6, 6.5, 7, 7, 7.5, 8, 8, 8.5, 9, 9,6, 6.5, 7, 7, 7.5, 8, 8, 8.5, 9, 9],
        emphasis: emphasisStyle,
        itemStyle: {
          color: '#b6ca51',

        }
      },
      {
        name: 'ממוצע נע סך הבדיקות',
        type: 'line',
        stack: 'one'
        ,symbolSize: 7 // Add this line to set the symbol size
,
        data: [1, 2, 3, 2, 2, 2, 2, 3, 3, 2,1, 2, 3, 2, 2, 2, 2, 3, 3, 2,1, 2, 3, 2, 2, 2, 2, 3, 3, 2],
        emphasis: emphasisStyle,
        itemStyle: {
          color: '#fe8672',
          normal: {
            color: '#ff9482',
            borderColor: '#ff9482',

          },
          emphasis: {
            color: '#fff',
            borderColor: '#ff9482',
            borderWidth: 6,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
}
export function  threeOption(colors:string[]){
  return {
    color: colors,

    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '5%', // add some padding to the left of the chart
      right: '5%', // add some padding to the right of the chart
      containLabel: true, // include axis labels in the chart area

  },
    toolbox: {

    },
    legend: {
      data: ['', '', '', '']
    },
    xAxis: [
      {
        type: 'category',

        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 30, // rotate the axis labels
          interval: 0 // display all labels
          ,margin:20
          ,fontSize: 12

        },

        data: ['5-11', '12-15', '16-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Evaporation',
        position: 'right',
        alignTicks: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          formatter: '{value} '
        }
      },
      {
        type: 'value',
        name: 'Precipitation',
        position: 'right',
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: '',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#a8a9ae'
          }
        },
        axisLabel: {
          formatter: '{value} '
        }
      }
    ],
    series: [
      {
        name: 'Evaporation',
        barWidth: 6.5, // change this value to adjust the bar width

        type: 'bar',
        data: [
          2.0, 4.9, 7.0, 2.2, 2.6, 2.7, 2.6, 2.2, 2.6, 2.0, 6.4, 3.3, 2.0, 4.9, 7.0, 2.2, 2.6, 2.7, 2.6, 2.2, 2.6, 20.0, 6.4, 3.3
        ]
      },
      {
        name: 'Precipitation',
        type: 'bar',
                  barWidth: 6.5, // change this value to adjust the bar width

        yAxisIndex: 1,
        data: [
          2.6, 5.9, 2.0, 2.4, 2.7, 4.7, 1.6, 2.2, 2.7, 18.8, 6.0, 2.3,  2.6, 5.9, 9.0, 2.4, 2.7, 2.7, 2.6, 2.2, 2.7, 2.8, 6.0, 2.3   ]
      },
      {
        name: 'Temperature',
        type: 'bar',
        barWidth: 6.5, // change this value to adjust the bar width

        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 2.2, 2.3, 23.4, 23.0, 16.5, 12.0, 6.2,2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };
}


export function  fourOption(){
  return {
    title: {},
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: 80,
      bottom: 30
    },
    xAxis: {
      type: 'value',
      position: 'bottom',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      min: -30,
   max: 30
    },
    yAxis: {
      type: 'category',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      data: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69','70-79','80-89','+90']

    },

    series: [
      {
        name: 'נשים',
        type: 'bar',
        stack: 'Total',
        barWidth: 6.5, // change this value to adjust the bar width

        label: {
          show: true,
          position: 'left',
          color: '#666',
          formatter: function(params:any) {
            return  (-params.value) + '%';
          }
        },
        itemStyle: {
          color: '#b6ca51'
        },
        data: [
          { value: -3 },
          { value: -5 },
          { value: -6 },
          { value: -2 },
          { value: -5 },
          { value: -3 },
          { value: -5 },
          { value: -7 },
          { value: -2 },
          { value: -3 },
        ]
      },
      {
        barWidth: 6.5, // change this value to adjust the bar width

        name: 'גברים',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'right',
          color: '#666',
          formatter: function(params:any) {
            return   params.value + '%';
          }
        },
        itemStyle: {
          color: '#50cbfd'
        },
        data: [
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 },
          { value: 8 },
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 },
          { value: 2 },
        ]
      }
    ]
  };
}
