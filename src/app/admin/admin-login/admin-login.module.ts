import { NgModule } from '@angular/core';
import { adminLoginRoutingModule } from './admin-login-routing.component';
import { materialShareModule } from '../../../shared/materialshare.module';
import { from } from 'rxjs';
import { AdminLoginComponent } from './admin-login.component';
 
@NgModule({
  declarations: [
    AdminLoginComponent,
  ],
  imports: [
    adminLoginRoutingModule,
    materialShareModule
  ],
  providers: [],
  bootstrap: [AdminLoginComponent]
})
export class adminLoginModule {
    constructor(){
        console.log("admin login module loaded");
      }
 }
