
///צריך לתת תקופה זמן ואז לעשות ספלייס וכל פעם שיש שינוי להשתמש בסאבגקט


export function  firstOption(timePeriod?:number,isDarkMode?:boolean){
  let colors:string[]=!isDarkMode?['#237d7d', '#ff9482', '#EE6666','#595d62','#fff']
  :['#9be985', '#fcc537','#ff9482','#595d62','#384f5f']
 const fakeData= generateDataForDays(timePeriod||25);

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
      data: [ '', 'ממוצע נע נפטרים'],right: 10,
      top: 'middle',
      orient: 'vertical',
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true
        },
           data: fakeData[0]
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
            color: colors[4],
          },
        },
        axisLabel: {
          formatter: '{value} ',
        },
      },
      {
        type: 'value',
        name: '',
        position: 'right',
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff',
          },
        },
        axisLabel: {
          formatter: '{value} ',
        },
      },
      {
        type: 'value',
        name: '',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: colors[3],
          },
        },
        axisLabel: {
          formatter: '{value} ',
        },
      },
    ],
    series: [
      {
        name: 'נפטרים',
        type: 'bar',
        barWidth: 6.5, // change this value to adjust the bar width

        data: fakeData[1]
      },   {
        name: 'ממוצע נפטרים',
        type: 'line',
        yAxisIndex: 2,
        data: fakeData[2]
        ,symbolSize: 7 // Add this line to set the symbol size
       , itemStyle: {

          normal: {
            color: colors[1],
            borderColor:  colors[1],
          },
          emphasis: {
            color: '#fff',
            borderColor:  colors[1],
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




function generateDataForDays(numDays: number): [string[], number[], number[], number[]] {
  let xAxisData: string[] = [];
  let pcrData: number[] = [];
  let antigenData: number[] = [];
  let movingAvgData: number[] = [];

  let today: Date = new Date();

  for (let i = 0; i < numDays; i++) {
    let date: Date = new Date(today);
    date.setDate(today.getDate() - numDays + i + 1);
    let dateString: string = date.getDate().toString().padStart(2, '0') + '.' + (date.getMonth() + 1).toString().padStart(2, '0');
    xAxisData.push(dateString);
    pcrData.push(Math.floor(Math.random() * 10));
    let maxPcrData: number = Math.max(...pcrData);
    let number=Math.floor(maxPcrData/2-Math.random()*1.2)
    if(number<0)
    number=Math.floor(maxPcrData/2-Math.random()*1.2)
    antigenData.push(number);
    movingAvgData.push(Math.floor(Math.random() * 3));
  }

  return [xAxisData, pcrData, antigenData, movingAvgData];
}



export function  secondOption(emphasisStyle:any,timePeriod?:number,isDarkMode?:boolean){
  const fakeData= generateDataForDays(timePeriod||25);

  let colors:string[]=!isDarkMode?['#50cbfd', '#b6ca51', '#ff9482','#fe8672']
  :['#50cbfd','#fe8672','#daa520'];


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
      data: fakeData[0]   },
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
        data: fakeData[1],
        emphasis: emphasisStyle,
        itemStyle: {
          color: colors[0],
        },
      },
      {
        name: 'אנטיגן מוסדי',
        type: 'bar',
        stack: 'one',
        barWidth: 6 ,
        data: fakeData[2],
        emphasis: emphasisStyle,
        itemStyle: {
          color: colors[1],

        }
      },
      {
        name: 'ממוצע נע סך הבדיקות',
        type: 'line',
        stack: 'one'
        ,symbolSize: 7 // Add this line to set the symbol size
,
        data: fakeData[2],
        emphasis: emphasisStyle,
        itemStyle: {
          color: colors[3],
          normal: {
            color: colors[2],
            borderColor: colors[2],

          },
          emphasis: {
            color: '#fff',
            borderColor: colors[2],
            borderWidth: 6,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        },
      }
    ]
  };
}
export function  threeOption(timePeriod?:number,isDarkMode?:boolean){


  let colors:string[]=!isDarkMode?['#50cbfd', '#237d7d', '#b6ca51','#fff']:['#9be985', '#fe8672','#2cd2db','#384f5f'];


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
        name: '',
        position: 'right',
        alignTicks: false,
        axisLine: {
          show: false,
          lineStyle: {
            color: colors[4]
          }
        },
        axisLabel: {
          formatter: '{value} '
        }
      },
      {
        type: 'value',
        name: '',
        position: 'right',
        alignTicks: true,
        offset: 80,
        axisLine: {
          show: true,
          lineStyle: {
            color: false
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
        //לא מחוסנים
        name: 'לא מחוסנים',
        barWidth: 6.5, // change this value to adjust the bar width

        type: 'bar',
        data: [
          2.0, 4.9, 7.0, 2.2, 2.6, 2.7, 2.6, 2.2, 2.6, 2.0, 6.4, 3.3, 2.0, 4.9, 7.0, 2.2, 2.6, 2.7, 2.6, 2.2, 2.6, 20.0, 6.4, 3.3
        ]
      },
      {
        ///מחוסנים
        name: 'מחוסנים',
        type: 'bar',
                  barWidth: 6.5, // change this value to adjust the bar width

        yAxisIndex: 1,
        data: [
          2.6, 5.9, 2.0, 2.4, 2.7, 4.7, 1.6, 2.2, 2.7, 18.8, 6.0, 2.3,  2.6, 5.9, 9.0, 2.4, 2.7, 2.7, 2.6, 2.2, 2.7, 2.8, 6.0, 2.3   ]
      },
      {
        //מחוסנים ללא תוקף
        name: 'מחוסנים ללא תוקף',
        type: 'bar',
        barWidth: 6.5, // change this value to adjust the bar width

        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 2.2, 2.3, 23.4, 23.0, 16.5, 12.0, 6.2,2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
      }
    ]
  };
}


export function  fourOption(timePeriod?:number,isDarkMode?:boolean){
   let colors:string[]=!isDarkMode?['#b6ca51','#50cbfd']:['#FD8264','#50cbfd'];

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
          color: colors[0]
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
          color: colors[1]
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
