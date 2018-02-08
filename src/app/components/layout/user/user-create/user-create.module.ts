import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateRoutingModule } from './user-create-routing.module';
import { UserCreateComponent } from './user-create.component';

@NgModule({
  imports: [
    CommonModule,
    UserCreateRoutingModule
  ],
  declarations: [UserCreateComponent ]
})
export class UserCreateModule { }
