import { Routes, RouterModule } from '@angular/router';
import { ChartsListComponent } from './components/charts-list/charts-list.component';
import { NgModule } from '@angular/core';
import { SideBysideComponent } from './components/charts-list/chart-item/chart-types/side-byside/side-byside.component';
import { PieComponent } from './components/charts-list/chart-item/chart-types/pie/pie.component';

const appRoutes: Routes = [
    {path: 'chartsList', component: ChartsListComponent},
    {path: 'chartsList/:index/sideByside', component: SideBysideComponent},
    {path: 'chartsList/:index/pie', component: PieComponent},
    {path: '', redirectTo: '/chartsList', pathMatch: 'full'}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

  }
