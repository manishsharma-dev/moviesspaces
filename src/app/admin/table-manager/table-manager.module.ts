import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { tableManagerRoutingModule } from './table-manager-routing.module';
import { materialShareModule } from '../../../shared/materialshare.module';
import { from } from 'rxjs';
import { TableManagerComponent } from './table-manager.component';
import { DialogOverviewExampleDialog } from './table-manager.component';
import { columnList  }from './table-manager.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { dynamicAlertModule } from '../../../shared/dynamicAlertModule/adminAlert.module'

@NgModule({
  declarations: [
    TableManagerComponent,
    DialogOverviewExampleDialog,
    columnList
  ],
  imports: [
    tableManagerRoutingModule,
    materialShareModule,
    FormsModule,
     ReactiveFormsModule,
     CommonModule,
     dynamicAlertModule
  ],
  entryComponents:[ DialogOverviewExampleDialog 
    , columnList
  ],
  providers: [],
  bootstrap: [TableManagerComponent]
})
export class tableManagerModule {
    constructor(){
        console.log("table module loaded");
      }
 }