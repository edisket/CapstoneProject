import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";


@Injectable({
    providedIn:'root'
})
export class LoginConfig{

    model:any;
    readonly loginFormGroup:FormGroup = new FormGroup({});

    readonly loginFormOptions:FormlyFormOptions={};

    readonly loginFormFields:FormlyFieldConfig[] = [
        {
            fieldGroupClassName:'row',
            fieldGroup:[
                {
                    key:'username',
                    type:'input',
                    className:'col-12',
                    templateOptions:{
                        label:'Username',
                        placeholder:"Enter username",
                        required:true
                    }
                },
                {
                    key:'password',
                    type:'input',
                    className:'col-12',
                    templateOptions:{
                        label:'Password',
                        placeholder:"Enter Password",
                        required:true,
                        attributes:{
                            type:'password'
                            
                        },
                    }
                }
            ]

        }
    ]

}