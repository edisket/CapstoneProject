import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { RegisterConfig } from "../../config/register.config";

@Component({

    selector:'register-component',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.scss']
})
export class RegisterComponent{


    registerCfg:{
        model:any,
        formGroup:FormGroup,
        formOptions:FormlyFormOptions,
        formFields:FormlyFieldConfig[]
    }


    constructor(regCfg:RegisterConfig){
        this.registerCfg = {
            model:regCfg.model,
            formGroup:regCfg.registerFormGroup,
            formOptions:regCfg.registerFormOptions,
            formFields:regCfg.registerFormFields
        }
    }


    OnSubmit(){}
}