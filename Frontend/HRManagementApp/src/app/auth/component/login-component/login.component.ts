import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { FormlyField, FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";
import { LoginConfig } from "../../config/login.config";


@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {


    loginConfig:{
        formGroup:FormGroup,
        model:any,
        fields:FormlyFieldConfig[],
        options:FormlyFormOptions
    }
    constructor(
        loginCfg:LoginConfig,
        private router:Router
    ) { 


        this.loginConfig = {
            formGroup:loginCfg.loginFormGroup,
            fields:loginCfg.loginFormFields,
            model:loginCfg.model,
            options:loginCfg.loginFormOptions
        }
    }


    OnLogin(){
        console.log("SUBMITT!");
        this.router.navigate(['./dashboard']);
    }

}