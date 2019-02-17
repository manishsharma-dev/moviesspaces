import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

   mainUrl ="http://localhost:3333/";
  constructor(private http: HttpClient) {    
   }
   

   getColumnData = function(callback,tableName) {    
     try{
     let req={
        "tableName":tableName
      }
      return this.http.post(this.mainUrl+'api/getAdminGridColumn',req)
      .subscribe((res) => {
        callback(null,res);
      })
     } 
    catch(ex){
      console.log(ex.message);
    }
   }

   getTableData =function(callback,tableName){
     try{
      let req={
        "tableName":tableName
      }
      return this.http.post(this.mainUrl+'api/getAdminGridData',req)
      .subscribe((res) => {
        callback(null,res);
      })
     }
     catch(ex){
      console.log(ex.message);
     }
   }

   getDropdownData =function(callback,tableName){
    try{
     let req={
       "tableName":tableName
     }
     return this.http.post(this.mainUrl+'api/getSelectDropdownData',req)
     .subscribe((res) => {
       callback(null,res);
     })
    }
    catch(ex){
     console.log(ex.message);
    }
  }

  getFilterData =  function(callback,req){
    try{
      
      return this.http.post(this.mainUrl+'api/getFilterdata',req)
      .subscribe((res) => {
        callback(null,res);
      })
     }
     catch(ex){
      console.log(ex.message);
     }
  }

   insertDataintoTable=function(callback,req){
     try{
      return this.http.post(this.mainUrl+'api/postData',req)
      .subscribe((res) => {
        callback(null,res);
      })
     }
     catch(ex){
       console.dir(ex.message);
          }
   }

  
}
