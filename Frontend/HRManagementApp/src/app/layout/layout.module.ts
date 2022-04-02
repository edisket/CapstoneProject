import { NgModule } from "@angular/core";
import { LayoutComponent } from "./component/layout.component";
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from "@angular/router";
@NgModule({
    declarations:[LayoutComponent],
    imports:[
        MatSidenavModule,
        RouterModule 
    ],
    exports:[LayoutComponent]
    
})
export class LayoutModule{}