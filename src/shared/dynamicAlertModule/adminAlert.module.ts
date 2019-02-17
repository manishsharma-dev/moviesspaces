import { NgModule } from '@angular/core';
import { materialShareModule } from '../../shared/materialshare.module';
import { from } from 'rxjs';
import { adminAlertComponent } from './adminAlert.component';
 
@NgModule({
  declarations: [
    adminAlertComponent,
  ],
  imports: [
    materialShareModule
  ],
  exports:[adminAlertComponent],
  providers: [],
  bootstrap: [adminAlertComponent]
})
export class dynamicAlertModule {
    constructor(){
        console.log("category module loaded");
      }
 }
