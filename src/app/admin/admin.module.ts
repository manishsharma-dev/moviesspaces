import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { adminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './header/header.component';
import { materialShareModule } from '../../shared/materialshare.module';

import { from } from 'rxjs';
 
@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
  ],
  imports: [
    adminRoutingModule,
    materialShareModule
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class adminModule {
    constructor(){
        console.log("admin module loaded");
      }
 }
