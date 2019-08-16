import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSettingComponent } from '../admin-setting/admin-setting.component';
import { ListUsersComponent } from '../list-users/list-users.component';

const routes : Routes = [
  { path: '' , component : AdminSettingComponent},
  { path: 'list-users' , component : ListUsersComponent  },
  { path: 'admin-settings' , component : AdminSettingComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
