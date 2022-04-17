import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyField, FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Injectable({
    providedIn:'root'
})
export class EmployeeConfig{
    model:any = {};
    


    //  positionOptions:any[] = [
    // ];

     employeeFormGroup:FormGroup = new FormGroup({});
     readonly employeeFormOptions:FormlyFormOptions={
        formState:{
            selectOptions:{
                positionOptions:[],
            }
        }
    };
    readonly employeeFormFields:FormlyFieldConfig[] = [

        {
            fieldGroupClassName:'row',
            fieldGroup:[
                {
                    key:'first_name',
                    type:'input',
                    className:'col-6',
                    templateOptions:{
                        label:'First Name',
                        required:true
                    }
                },
                {
                    key:'last_name',
                    type:'input',
                    className:'col-6',
                    templateOptions:{
                        label:'Last Name',
                        required:true
                    }
                },
                {
                    key:'position_id',
                    type:'select',
                    className:'col-12',
                    templateOptions:{
                        label:'Position',
                        required:false,
                        // options:this.employeeFormOptions.formState.selectOptions.positionOptions
                    },
                    expressionProperties: {
						'templateOptions.options': 'formState.selectOptions.positionOptions',
					}

                }
            ]
        }
    ]
    
    readonly employeeColumnHeader = [
        {
            field:'first_name',
            header:'First Name'
        },
        {
            field:'last_name',
            header:'Last Name'
        },
        {
            field:'position_name',
            header:'Position'
        }
    ]
}

export interface EmployeeType{
    
    id?:number|null;
    first_name?:string|null;
    last_name?:string|null;
    pos_id?:number|null;
    pos_name?:string|null;

}