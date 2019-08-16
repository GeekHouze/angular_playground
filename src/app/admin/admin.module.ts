import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import {AdminSettingComponent} from './admin-setting/admin-setting.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { RoutingModuleModule } from '../routing-module/routing-module.module';

@NgModule({
  declarations: [
    ListUsersComponent,
    AdminSettingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
