import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { LoginComponent } from "./component/login-component/login.component";
import { RegisterComponent } from "./component/register-component/register.component";


@NgModule(
    {
        declarations:[LoginComponent, RegisterComponent],
        imports:[
            FormlyModule,
            ReactiveFormsModule,
            FormlyBootstrapModule,
            RouterModule.forChild([
                {
                    path:'',
                    component:LoginComponent
                },
                {
                    path:'register',
                    component:RegisterComponent
                }
            ])
        ],

    }
)
export class AuthModule{}