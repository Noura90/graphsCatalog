import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ChartsListComponent } from './components/charts-list/charts-list.component';
import { ChartService } from './services/charts.service';
import { AppRoutingModule } from './app-routing.module';
import { SideBysideComponent } from './components/charts-list/chart-item/chart-types/side-byside/side-byside.component';
import { PieComponent } from './components/charts-list/chart-item/chart-types/pie/pie.component';
import { DataSourceService } from './services/datasources.service';
import { DevExtremeModule} from 'devextreme-angular';
import { ChartConfigureComponent } from './components/charts-list/chart-item/chart-configure/chart-configure.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ChartsListComponent,
    SideBysideComponent,
    PieComponent,
    ChartConfigureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevExtremeModule,
    FormsModule
  ],
  providers: [ChartService, DataSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
