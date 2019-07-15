import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ChartsListComponent } from './components/charts-list/charts-list.component';
import { ChartService } from './services/charts.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ChartsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
