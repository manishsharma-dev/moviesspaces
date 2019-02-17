import { NgModule } from '@angular/core';
import { categoryRoutingModule } from './category-routing.module';
import { materialShareModule } from '../../../shared/materialshare.module';
import { from } from 'rxjs';
import { CategoryComponent } from './category.component';
 
@NgModule({
  declarations: [
    CategoryComponent,
  ],
  imports: [
    categoryRoutingModule,
    materialShareModule
  ],
  providers: [],
  bootstrap: [CategoryComponent]
})
export class categoryModule {
    constructor(){
        console.log("category module loaded");
      }
 }
