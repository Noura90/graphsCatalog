import { DataSource } from './datasource.model';

export class Chart {


    constructor(
        public title: string,
        public type: string,
        public createdOn: Date,
        public imagePath: string,
        public dataSource: DataSource) {}
}
