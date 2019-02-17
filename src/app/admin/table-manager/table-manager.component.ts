import { Component, OnInit,ViewChild, Input,Inject } from '@angular/core';
import {MatPaginator,MatSort, MatTableDataSource,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Form, FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import { ApiServiceService } from '../../services/api-service.service';
import { adminAlertComponent } from '../../../shared/dynamicAlertModule/adminAlert.component';
import {MatSnackBar} from '@angular/material';
import { Model } from './variablesName';
@Component({
  selector: 'app-table-manager',
  templateUrl: './table-manager.component.html',
  styleUrls: ['./table-manager.component.css']
})
export class TableManagerComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dynamicColumnValues=[];
  @Input() alertData;
  dataSource=new MatTableDataSource();   
  viewList=[];
  public Model: Model;
  myForm: FormGroup;
  animal: string;
  name: string;
  constructor(private api: ApiServiceService,public snackBar: MatSnackBar,public dialog: MatDialog) { 
    this.getColumnValues=this.getColumnValues.bind(this);   
  }

  ngOnInit() {
    this.getColumnValues();
    this.getViewDropdown();
    this.Model.test1="manish Sharma";
    this.myForm = new FormGroup({
      viewName: new FormControl('',Validators.required),
     
    });
  }  

  getViewDropdown(){
     try{
      this.api.getDropdownData(this.getDropdownCallbackFunction.bind(this),'MVSysTableViewsView');  
     }
     catch(ex){

     }
  }

  getDropdownCallbackFunction(err,data) {
    if(err){
      console.log(err);
     }
     else
     {
       let rows=data[0];
       this.viewList=rows;
       console.log(rows);
     }
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
         this.api.getColumnData(this.getcolumnCallbackfunction.bind(this),'MVVIEWSLISTVIEW');               
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
       rows.splice(0,0,'Action');
       this.displayedColumns=rows;
       //this.displayedColumns=['title','year'];
      this.getGridData();
     }
  }

  getGridData(){
    try{
      this.api.getTableData(this.getMainTableCallback.bind(this),'MVVIEWSLISTVIEW'); 
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
    
    updateView(data){
      console.log(data);
    }
    onSubmit(form: FormGroup){
      // console.log('Valid?', form.valid); // true or false
      // console.log('Name', form.value.name);
      // console.log('Email', form.value.email);
      // console.log('Message', form.value.message);   
         var viewObj={};
         viewObj['tableName']='MVVIEWSLISTVIEW';
         viewObj['viewName']=form.value.viewName;
         viewObj['createdDate']='';
         viewObj['createdBy']=10008;
         viewObj['Responsetable']='MVVIEWSLISTVIEW';
         this.api.insertDataintoTable(this.getResponseCallBack.bind(this),viewObj);
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
          this.getViewDropdown();
    }
    
openColumnList(data):void{
  const dialogRef = this.dialog.open(columnList, {
    width: '1400px',
    data: {data}
  });
}
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
  styleUrls: ['./table-manager.component.css']
})
export class DialogOverviewExampleDialog implements OnInit {

  ColumnForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data,private api: ApiServiceService) {
      console.log(this.data);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(){
    this.ColumnForm = new FormGroup({
      RECID : new FormControl({value:this.data.data.RECID,disabled:true}),
      RECVERSION: new FormControl({value:this.data.data.RECVERSION,disabled:true}),
      columnName: new FormControl({value:this.data.data.COLUMNNAME,disabled:true}),
      Label: new FormControl(''),
      tableVisible:new FormControl(this.data.data.ISTABLEVISIBLE),
      isFilter: new FormControl(this.data.data.ISFILTER),
      filterSequence: new FormControl(this.data.data.FILTERSEQ),
      isLookUp: new FormControl(this.data.data.ISDROPDOWN),
      lookUpSequence: new FormControl(this.data.data.DROPDOWNSEQ)
    });
  }

  onSubmit(form: FormGroup){
    console.log(form);
  }

}

@Component({
  selector: 'column-List',
  templateUrl: 'column-list.html',
  styleUrls: ['./table-manager.component.css']
})
export class columnList implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dynamicColumnValues=[];
  dataSource=new MatTableDataSource();
  filterData="";
  ColumnForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<columnList>,
    @Inject(MAT_DIALOG_DATA) public data,private api: ApiServiceService,public dialog: MatDialog) {
      this.getColumnValues=this.getColumnValues.bind(this); 
      console.log(this.data);   
      this.filterData=this.data.data.RECID;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px',
      data: {data}
    });
}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(){
    this.getColumnValues();
    this.ColumnForm = new FormGroup({     
     
    });
  }

  getColumnValues = function(){

    try{
         this.api.getColumnData(this.getcolumnCallbackfunction.bind(this),'MVVIEWCOLUMNSVIEW'); 
                    
        }
    catch(ex){
      console.log(ex.message);
    }
  }
  displayedColumns=[];
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
       rows.splice(0,0,'Action');
       this.displayedColumns=rows;
       //this.displayedColumns=['title','year'];
      this.getGridData();
     }
  }

  getGridData(){
    try{
let json={
"tableName":"MVVIEWCOLUMNSVIEW",
"filter":this.filterData
}
      this.api.getFilterData(this.getMainTableCallback.bind(this),json); 
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
    console.log(form);
  }

}
