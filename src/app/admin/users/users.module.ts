import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { usersRoutingModule } from './users-routing.module';
import { materialShareModule } from '../../../shared/materialshare.module';
import { from } from 'rxjs';
import { UsersComponent } from './users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { dynamicAlertModule } from '../../../shared/dynamicAlertModule/adminAlert.module'


@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    usersRoutingModule,
    materialShareModule,
    FormsModule,
     ReactiveFormsModule,
     CommonModule,
     dynamicAlertModule
  ],
  providers: [],
  bootstrap: [UsersComponent]
})
export class usersModule {
    constructor(){
        console.log("users module loaded");
      }
 }