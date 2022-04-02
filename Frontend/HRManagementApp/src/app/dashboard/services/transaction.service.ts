import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class TransactionService{


    apiUri = "localhost:3000"
    constructor(private http:HttpClient){}



    CreateEmployee(reqBody:any){
        return this.http.post<any>(this.apiUri,reqBody );
    }
}