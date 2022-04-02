import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "../layout/layout.module";
import { DashboardComponent } from "./dashboard.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from "@angular/common";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { SubModule } from "./sub-component/sub.module";



@NgModule({
    declarations:[DashboardComponent],
    imports:[
        LayoutModule,
        CommonModule,
        MatCheckboxModule,
        MatSidenavModule,
        RouterModule.forChild([

            {
                path:'',
                component:DashboardComponent,
                children:[
                    {
                        path:'',
                        loadChildren: ()=> import('./sub-component/sub.module').then(x=>x.SubModule)
                    }
                ]
            },
           
        ]),
    ]
})
export class DashboardModule{}