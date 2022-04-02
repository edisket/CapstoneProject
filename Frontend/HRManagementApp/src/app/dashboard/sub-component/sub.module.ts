import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "src/app/auth/pagenotfound.component";
import { EmployeeComponent } from "./employee/employee.component";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatDialogModule} from '@angular/material/dialog';
import { EmployeeModalComponent } from "./employee/modal/employee-modal.component";
import { FacialRecogComponent } from "./facial-recog/facial-recog.componen";
@NgModule({
    declarations:[EmployeeComponent, EmployeeModalComponent, FacialRecogComponent],
    imports:[
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        RouterModule.forChild([
            {
                path:'employee',
                component:EmployeeComponent
            },
            {
                path:'facial-recog',
                component:FacialRecogComponent
            },
            {
                path: "**",
                component:PageNotFoundComponent
            }
        ])
    ],
    exports:[
        RouterModule
    ]
})
export class SubModule{}