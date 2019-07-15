import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/charts.service';
import { Chart } from 'src/app/model/chart.model';

@Component({
  selector: 'app-charts-list',
  templateUrl: './charts-list.component.html',
  styleUrls: ['./charts-list.component.css']
})
export class ChartsListComponent implements OnInit {

  charts: Chart[] = [];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.charts = this.chartService.getCharts();
  }

}
