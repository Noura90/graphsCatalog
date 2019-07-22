import { Chart } from '../model/chart.model';
import { Injectable } from '@angular/core';
import { DataSourceService } from './datasources.service';
import { Subject } from 'rxjs';


@Injectable()
export class ChartService {


    constructor(private dataSourceService: DataSourceService) {
    }

    charts: Chart[] = [
        {
            title: 'Détail des produits par Activité Budget Réalisé - Exercice en cours et N-1 en Euros',
            type: 'sideByside',
            createdOn: new Date(2019, 1, 1),
            imagePath: 'http://homepages.gac.edu/~anienow2/MCS_142/R/R-barchart2-2_files/figure-html/unnamed-chunk-2-1.png',
            dataSource: this.dataSourceService.getDataSource(0)
        },
        {
            title: 'Origine des Subventions Budget Revisité - Origine des Subventions',
            type: 'pie',
            createdOn: new Date(2019, 1, 1),
            imagePath: 'https://www.meta-chart.com/assets/images/pie/pie_value.png',
            dataSource: this.dataSourceService.getDataSource(1)
        }
    ];

    getCharts() {
        return this.charts;
    }

    getChart(id: number) {
        return this.charts[id];
    }

}
