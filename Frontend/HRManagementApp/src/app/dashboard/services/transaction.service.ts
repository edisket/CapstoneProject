import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiUtil } from "src/app/util/apiUtil";

@Injectable({
    providedIn:'root'
})
export class TransactionService{


    apiUri = "http://localhost:3000/"
    constructor(private http:HttpClient){}





    



    InsertEmployee(req:any){



        const httpHeader = new HttpHeaders();

        httpHeader.set('content-type', 'multipart/form-data')

        return this.http.post<any>(this.apiUri + ApiUtil.INSERT_EMP, req, {
            headers:httpHeader
        });
    }

    GetAllPosition(){
        return this.http.get<any>(this.apiUri + ApiUtil.GET_ALL_POSITION);
    }

}