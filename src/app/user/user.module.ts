import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { userRoutingModule } from './user-routing.module';
 
@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    userRoutingModule
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class userModule {
    constructor(){
        console.log("User module loaded");
      }
 }
