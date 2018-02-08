import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoRoutingModule } from './user-info-routing.module';
import { UserInfoComponent } from './user-info.component';

@NgModule({
  imports: [
    CommonModule,
    UserInfoRoutingModule
  ],
  declarations: [ UserInfoComponent ]
})
export class UserInfoModule { }
