import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-orderchart',
  templateUrl: './orderchart.component.html',
  styleUrls: ['./orderchart.component.css']
})
export class OrderchartComponent implements OnInit {
 
  canvas:any;
  ctx:any;
  constructor() { }

  ngOnInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          labels: [1,2,3,5],
          datasets: [{
              label: 'DBC',
              data: [1,2,3,8],
              backgroundColor:'#3cba9f',
              borderWidth: 1,
              borderColor: "#3cba9f",
              fill:false
          },
          {
            label: 'DFA',
            data: [5,8,2,6],
            backgroundColor: '#ffcc00',
            borderColor: "#ffcc00",
            borderWidth: 1,
            fill:false
          },
          {
            label: 'LEASE',
            data: [9,8,10,15],
            backgroundColor: '#3b9ce4',
            borderColor: "#3b9ce4",
            borderWidth: 1,
            fill:false
          }
        ],
      },
      options: {
        responsive: false,
        display:true,
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
							display: true,
							labelString: 'Time Hours'
						}
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
							display: true,
							labelString: 'No of Orders'
						}
          }],
        }
      }
    });
  }

}
