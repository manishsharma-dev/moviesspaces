import { Component, OnInit,ViewChild, Input } from '@angular/core';
import {MatPaginator,MatSort, MatTableDataSource} from '@angular/material';
import {Form, FormControl, FormGroupDirective, NgForm, Validators, FormGroup, RequiredValidator} from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { adminAlertComponent } from '../../../shared/dynamicAlertModule/adminAlert.component';
import {MatSnackBar} from '@angular/material';

export interface userData{
  tableName:string,
	FirstName:string,
	LastName:string,
	Dob:string,
	Gender:number,
	Email:string,
	Responsetable:string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dynamicColumnValues=[];
  @Input() alertData;
  dataSource=new MatTableDataSource(); 
  myForm: FormGroup;

  constructor(private api: ApiServiceService,public snackBar: MatSnackBar) { 
    this.getColumnValues=this.getColumnValues.bind(this);    
  }

  ngOnInit() {   
    this.getColumnValues();
    this.myForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      dob:new FormControl(''),
      email: new FormControl(''),
      gender:new FormControl('')
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  displayedColumns=[];
  getColumnValues = function(){

    try{
         this.api.getColumnData(this.getcolumnCallbackfunction.bind(this),'MVUsersView');               
        }
    catch(ex){
      console.log(ex.message);
    }
  }

  getcolumnCallbackfunction(err,data) {
    if(err){
      console.log(err);
     }
     else
     {
       let rows=[];
       for(let l=0;l<data[0].length;l++){
        rows.push(data[0][l].COLUMNNAME);
       }
       this.displayedColumns=rows;
       //this.displayedColumns=['title','year'];
      this.getGridData();
     }
  }

  getGridData(){
    try{
      this.api.getTableData(this.getMainTableCallback.bind(this),'MVUsersView'); 
  }
  catch(ex){
    console.log(ex.message);
  }
  }

  getMainTableCallback= function(err,data){
      if(err){
        console.log(err);
       }
       else
       {
          this.dataSource=new MatTableDataSource(data[0]);  
          //this.dataSource=new MatTableDataSource(ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort=this.sort; 
       }
    }  

    onSubmit(form: FormGroup){
      console.log('Valid?', form.valid); // true or false
      console.log('Name', form.value.name);
      console.log('Email', form.value.email);
      console.log('Message', form.value.message);   
        var userObj={};
        userObj['tableName']='USERS';
        userObj['FirstName']=form.value.firstName;
        userObj['LastName']=form.value.lastName;
        userObj['Dob']=form.value.dob;
        userObj['Gender']=form.value.gender;
        userObj['Email']=form.value.email;
        userObj['Responsetable']='USERS';
        console.log(userObj);

        this.api.insertDataintoTable(this.getResponseCallBack.bind(this),userObj);
    }
    getResponseCallBack=function(err,data){
     if(err){
       console.log(err);
       this.myForm.reset();
       return;
     }
     this.dataSource=new MatTableDataSource(data[0]);  
          //this.dataSource=new MatTableDataSource(ELEMENT_DATA);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort=this.sort; 
          this.myForm.reset();
          this.snackBar.open('Record inserted successfully','',{ duration:2000,verticalPosition: 'top'});
    
    }
    
}
