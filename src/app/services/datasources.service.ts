import { DataSource } from '../model/datasource.model';


export class DataSourceService {
    dataSources: DataSource[] = [
        new DataSource('productDetails', [
            {
                activity: 'Aides/Subventions',
                currentYear: 12.108,
                lastYear: 23.375,
                currentYearValue: '2017/2018',
                lastYearValue: '2018/2019'
            },
            {
                activity: 'Activités courantes',
                currentYear: 305.980,
                lastYear: 732.243,
                currentYearValue: '2017/2018',
                lastYearValue: '2018/2019'
            },

            {
                activity: 'Activités Spécif. Jeunes',
                currentYear: 7.615,
                lastYear: 8.937,
                currentYearValue: '2017/2018',
                lastYearValue: '2018/2019'
            },

            {
                activity: 'Activités Insertion',
                currentYear: 8.556,
                lastYear: 10.285,
                currentYearValue: '2017/2018',
                lastYearValue: '2018/2019'
            },

            {
                activity: 'Activités de proximité et Convivialité',
                currentYear: 3.989,
                lastYear: 4.728,
                currentYearValue: '2017/2018',
                lastYearValue: '2018/2019'
            },

            {
                activity: 'Activités Spectacles',
                currentYear: 0,
                lastYear: 0,
                currentYearValue: '2017/2018',
                lastYearValue: '2018/2019'
            },


            {
                activity: 'Activités Hors jeunes',
                currentYear: 6.155,
                lastYear: 7.311,
                currentYearValue: '2017/2018',
                lastYearValue: '2018/2019'
            },
        ]),

        new DataSource('subventions', [
            {
                origin: 'Paris',
                value: 95
            },

            {
                origin: 'Etat',
                value: 5
            },

            {
                origin: 'Region',
                value: 0
            },

            {
                origin: 'UE',
                value: 0
            },

            {
                origin: 'Autres',
                value: 0
            }
        ])

    ];

    getDataSource(index: number) {
        return this.dataSources[index];
    }


}
