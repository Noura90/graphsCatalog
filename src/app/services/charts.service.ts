import { Chart } from '../model/chart.model';



export class ChartService {

    constructor() {
    }

    charts: Chart[] = [
        {
            title: 'Détail des produits par Activité Budget Réalisé - Exercice en cours et N-1 en Euros',
            type: 'sideByside',
            createdOn: new Date(2019, 1, 1),
            imagePath: 'http://homepages.gac.edu/~anienow2/MCS_142/R/R-barchart2-2_files/figure-html/unnamed-chunk-2-1.png'
        },
        {
            title: 'Origine des Subventions Budget Revisité - Origine des Subventions',
            type: 'pie',
            createdOn: new Date(2019, 1, 1),
            imagePath: 'https://www.meta-chart.com/assets/images/pie/pie_value.png'
        }
    ];

    getCharts() {
        return this.charts.slice();
    }
}
