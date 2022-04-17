import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class EmployeeRegistrationService{

    model:any = {};
    registrationState:string;
    OnNextStep(){
    }

}
