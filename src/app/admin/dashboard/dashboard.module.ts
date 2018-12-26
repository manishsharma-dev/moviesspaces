import { NgModule } from '@angular/core';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { materialShareModule } from '../../../shared/materialshare.module';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
 
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    dashboardRoutingModule,
    materialShareModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class dashboardModule {
    constructor(){
        console.log("dashboard module loaded");
      }
 }
