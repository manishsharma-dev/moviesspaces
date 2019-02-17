import { Component, OnInit,OnChanges, ViewChild,SimpleChanges } from '@angular/core';
import {MatPaginator,MatSort, MatTableDataSource} from '@angular/material';
import {Form, FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
//import { first } from 'rxjs/operators';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
 export class GenreComponent implements OnInit {

  constructor(private api: ApiServiceService) { 
    
  }


  ngOnInit() {   
    
  }


}
