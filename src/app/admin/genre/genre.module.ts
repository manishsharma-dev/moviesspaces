import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { genreRoutingModule } from './genre-routing.module';
import { materialShareModule } from '../../../shared/materialshare.module';
import { from } from 'rxjs';
import { GenreComponent } from './genre.component';
import {FormsModule} from '@angular/forms';
 
@NgModule({
  declarations: [
    GenreComponent,
  ],
  imports: [
    genreRoutingModule,
    materialShareModule,
    FormsModule,
     CommonModule
  ],
  providers: [],
  bootstrap: [GenreComponent]
})
export class genreModule {
    constructor(){
        console.log("genre module loaded");
      }
 }
