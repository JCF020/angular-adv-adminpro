import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
})
export class DonaComponent {
  @Input() titulo: string = 'Sin Titulo';
  @Input() data = [350, 450, 100];

  @Input('labels') doughnutChartLabels: string[] = [
    'labels 1',
    'labels 2',
    'labels 3',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [{ data: this.data }],
  };

  ngOnChanges(){
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [{ data: this.data }],
    };
  } 
}
