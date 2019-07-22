import { Component, OnInit, Input } from '@angular/core';
import { ChartService } from 'src/app/services/charts.service';
import { Chart } from 'src/app/model/chart.model';

@Component({
  selector: 'app-charts-list',
  templateUrl: './charts-list.component.html',
  styleUrls: ['./charts-list.component.css']
})
export class ChartsListComponent implements OnInit {

  charts: Chart[] = [];
  @Input() selectedOption: string;

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    this.selectedOption = 'tous types'
    this.charts = this.chartService.getCharts();
  }

  onTypeSelect() {
    this.charts = this.chartService.getCharts();
    if (this.selectedOption !== 'tous types') {
      this.charts = this.charts.filter(
        (chart: Chart) => {
          return chart.type === this.selectedOption;
        }
      );
  }
}

}
