import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:'layout-component',
    templateUrl:'./layout.component.html',
    styleUrls:['./layout.component.scss']
})
export class LayoutComponent{

    constructor(private router:Router){}
  
}