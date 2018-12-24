import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  events: string[] = [];
  opened: boolean=true;
  toggletitle :string ="close menu";
  constructor() { }

  ngOnInit() {
  }

  toggleclicked(){
    if(this.opened==true){
          this.toggletitle="open menu"
    }
    else{
      this.toggletitle="close menu"
    }
  }

}
