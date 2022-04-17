import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "src/app/auth/pagenotfound.component";
import { EmployeeComponent } from "./employee/employee.component";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatDialogModule} from '@angular/material/dialog';
import { EmployeeModalComponent } from "./employee/modal/employee-modal.component";
import { FacialRecogComponent } from "./facial-recog/facial-recog.componen";
import { FormlyModule } from "@ngx-formly/core";
import { ReactiveFormsModule } from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';
import { ImageViewerComponent } from "./employee/modal/image-viewer/image-viewer.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { TransactionService } from "../services/transaction.service";
@NgModule({
    declarations:[
        ImageViewerComponent,
        EmployeeComponent, EmployeeModalComponent, FacialRecogComponent],
    imports:[
        HttpClientModule,
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        FormlyModule,
        ReactiveFormsModule,
        MatStepperModule,
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
    providers:[
        TransactionService
    ],
    exports:[
        RouterModule
    ]
})
export class SubModule{}