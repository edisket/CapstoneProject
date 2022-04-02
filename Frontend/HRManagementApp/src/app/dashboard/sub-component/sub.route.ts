import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "src/app/auth/pagenotfound.component";
import { EmployeeComponent } from "./employee/employee.component";

const route:any = [
    {
        path:"employee",
        component:EmployeeComponent
    },
    {
    path:"**",
    component:PageNotFoundComponent  
  }
]
@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})
export class SubRoute{}