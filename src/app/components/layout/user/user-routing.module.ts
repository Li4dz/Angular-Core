import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./user.component";
import {  } from "./user-info/user-info.module";

const routes : Routes = [
  { 
    path : '' , 
    component   : UserComponent,
    children    : [
      { path  : '' , redirectTo : 'info' },
      { path  : 'info', loadChildren : './user-info/user-info.module#UserInfoModule' },
      { path  : 'create', loadChildren : './user-create/user-create.module#UserCreateModule' }
    ] 
  }
    
];

@NgModule({
    imports : [ RouterModule.forChild(routes)],
    exports : [ RouterModule ]
})

export class UserRoutingModule { }