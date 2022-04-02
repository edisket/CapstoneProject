import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";


@Injectable({
    providedIn: 'root'
})
export class RegisterConfig {
    model: any;

    readonly registerFormGroup: FormGroup = new FormGroup({});
    readonly registerFormOptions: FormlyFormOptions = {};
    readonly registerFormFields: FormlyFieldConfig[] = [
        {
            fieldGroupClassName: 'row',
            fieldGroup: [

                {
                    key: 'first_name',
                    type: 'input',
                    className: 'col-6',
                    templateOptions: {
                        label: 'First Name',
                        required: true
                    }
                },
                {
                    key: 'last_name',
                    type: 'input',
                    className: 'col-6',
                    templateOptions: {
                        label: 'Last Name',
                        required: true
                    }
                },
                {
                    key: 'username',
                    type: 'input',
                    className: 'col-12',
                    templateOptions: {
                        label: 'Username',
                        placeholder: 'Enter username',
                        required: true
                    }
                },
                {
                    key: 'password',
                    type: 'input',
                    className:'col',
                    templateOptions: {
                        label: 'Password',
                        required: true,
                        attributes: {
                            type: 'Password'
                        }
                    }
                }



            ]
        }
    ];



}