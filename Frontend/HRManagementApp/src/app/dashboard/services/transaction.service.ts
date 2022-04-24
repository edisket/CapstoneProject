import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiUtil } from "src/app/util/apiUtil";

@Injectable({
    providedIn:'root'
})
export class TransactionService{


    apiUri = "http://localhost:3000/"
    constructor(private http:HttpClient){}


    httpOption = {
        headers: new HttpHeaders({
            'Content-Type':'multipart/form-data'
        })
    }


    InsertEmployee(req:any){

        var fd = new FormData();
        fd.append('firstName', req.firstName);
        fd.append('lastName', req.lastName);
        fd.append('position', req.position);
        fd.append('files',req.image);

        return this.http.post<any>(this.apiUri + ApiUtil.INSERT_EMP, fd);
    }

    GetAllPosition(){
        return this.http.get<any>(this.apiUri + ApiUtil.GET_ALL_POSITION);
    }


    GetAllEmployee(){
        return this.http.get<any>(this.apiUri+ ApiUtil.GET_ALL_EMPLOYEE);
    }

}