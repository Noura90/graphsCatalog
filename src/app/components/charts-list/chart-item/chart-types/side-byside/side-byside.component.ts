import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ChartService } from 'src/app/services/charts.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Chart } from 'src/app/model/chart.model';

@Component({
  selector: 'app-side-byside',
  templateUrl: './side-byside.component.html',
  styleUrls: ['./side-byside.component.css']
})
export class SideBysideComponent implements OnInit, AfterViewInit {
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
