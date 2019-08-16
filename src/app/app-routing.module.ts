import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent  } from './header/header.component';
import { ListUsersComponent } from './admin/list-users/list-users.component';
import { SignUpComponent} from './sign-up/sign-up.component';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {ValidationComponent} from './validation/validation.component';
import {EventEmitterComponent} from './event-emitter/event-emitter.component';
import {RegisterComponent } from './register/register.component';
import {HttpRequestComponent} from './http-request/http-request.component';

const routes : Routes = [
  { path: '', component: EventEmitterComponent, pathMatch: 'full'},
  { path: 'eventEmitters' , component : EventEmitterComponent },
  { path: 'services' , component : BodyComponent } ,
  { path: 'observables' , component :  HomeComponent } ,
  { path: 'httpRequests' , component : HttpRequestComponent},
  { path: 'data-binding' , component : DataBindingComponent},
  { path: 'validation' , component : SignUpComponent},
  { path: 'forms' , component : RegisterComponent},
  { path: 'sign-up', component : SignUpComponent },
  // { path: 'modules', component : AdminSettingComponent},
  //{ path: '**', redirectTo: '/services', pathMatch: 'full'},
  {
    path: 'modules',
    loadChildren: './admin/admin.module#AdminModule'
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
