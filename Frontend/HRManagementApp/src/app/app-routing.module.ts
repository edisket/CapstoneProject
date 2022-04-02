import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './auth/pagenotfound.component';

const routes: Routes = [
  {
    path:"",
    loadChildren: ()=> import ('./auth/auth.module').then(m=>m.AuthModule),
  },
  {
    path:"dashboard",
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:"**",
    component:PageNotFoundComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
