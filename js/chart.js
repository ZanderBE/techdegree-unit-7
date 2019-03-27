// Variables
var hourlyButton = document.querySelector('.hourly__button');
var dailyButton = document.querySelector('.daily__button');
var weeklyButton = document.querySelector('.weekly__button');
var monthlyButton = document.querySelector('.monthly__button');

// Charts
var ctx = document.getElementById('lineChart');
ctx.height = 210;

var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10","11-17", "18-24", "25-31"],
        datasets: [{
            label: "Weekly",
            backgroundColor: 'rgb(108, 153,	228, .3)',
            borderColor: '#0F2E61',
            borderWidth: 1,
            pointRadius: 5,
            pointBorderWidth: 2,
            pointBackgroundColor: 'white',
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            lineTension: '0',

        }]
    },

    // Configuration options go here
    options: {
        spanGaps: true,
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          yAxes: [{
            gridLines: {
              drawTicks: false,
            },
            ticks: {
              beginAtZero: true,
              padding: 10,
            }
          }],

          xAxes: [{
            gridLines: {
              offsetGridLines: true,
              drawTicks: false,
            },
            ticks: {
              padding: 10,
              beginAtZero: true,
            },


          }]

        }
    }
});

// Additional line chart data for graph buttons
hourlyButton.addEventListener('click', function(e) {
  chart.data.labels = ["12am","1am", "2am", "3am", "4am", "5am", "6am", "7am", "9am", "10pm", "11pm", "12pm"]
  chart.data.datasets.forEach((dataset) => {
    dataset.data = ["20","15", "5", "5", "5", "10", "70", "100", "110", "130", "120", "80"]
     });
  chart.update();
});

dailyButton.addEventListener('click', function(e) {
  chart.data.labels = ["S", "M", "T", "W", "T", "F", "S"]
  chart.data.datasets.forEach((dataset) => {
    dataset.data = ["230", "350", "280", "290", "250", "200", "240"]
     });
  chart.update();
});

weeklyButton.addEventListener('click', function(e) {
  chart.data.labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10","11-17", "18-24", "25-31"]
  chart.data.datasets.forEach((dataset) => {
    dataset.data = [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250]
     });
  chart.update();
});

monthlyButton.addEventListener('click', function(e) {
  chart.data.labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  chart.data.datasets.forEach((dataset) => {
    dataset.data = ["3300", "5000", "4300", "4600", "6980", "7500", "5400", "6700", "6500", "9500", "8600", "10350"]
     });
  chart.update();
});

var ctx2 = document.getElementById('barGraph');
ctx2.height = 210;
var myBarChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ["S", "M", "T", "W", "T", "F", "S"],
      datasets: [{
        data: [75, 100, 175, 125, 225, 200, 100],
        backgroundColor: '#0F2E61',

      }]
    },
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          gridLines: {
            drawTicks: false,
          },
          ticks: {
            padding: 10,
          }
        }],

        xAxes: [{
          gridLines: {
            drawTicks: false,
          },
          ticks: {
            padding: 10,
          },
        }]
      }
    }
  });

var ctx3 = document.getElementById('doughnutGraph');
ctx3.height = 210;
var myDoughnutChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Phones', 'Tablets', 'Desktop'],
      datasets: [{
        data: [12.5, 12.5, 75],
        backgroundColor: ['#2F6FDA', '#D4DDED', '#0F2E61'],
      }]
    },
    options: {
      legend: {
        position: 'right',
        labels: {
          padding: 15,
          boxWidth: 12,
        }
      },
      responsive: true,
      maintainAspectRatio: false,
    }
});

// Chart sizing
