import { Component, OnInit } from '@angular/core';
import { Chart } from 'src/app/model/chart.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ChartService } from 'src/app/services/charts.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  chart: Chart;
  dataSource: any[];
  title: string;

  constructor(
    private route: ActivatedRoute,
    private chartService: ChartService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.chart = this.chartService.getChart(+params.index);
        this.dataSource = this.chart.dataSource.data;
        this.title = this.chart.title;
      }
    );
  }

}
