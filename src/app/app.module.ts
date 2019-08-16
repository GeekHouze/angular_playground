import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent  } from './header/header.component';
import {HttpClientModule } from '@angular/common/http';
import {SignUpComponent} from './sign-up/sign-up.component';
import { ValidationComponent } from './validation/validation.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { RegisterComponent } from './register/register.component';
import { HttpRequestComponent } from './http-request/http-request.component';

@NgModule({
 declarations: [
    AppComponent,
   NavbarComponent,
    BodyComponent,
    HomeComponent,
    HeaderComponent,
    SignUpComponent,
    ValidationComponent,
    DataBindingComponent,
    EventEmitterComponent,
    RegisterComponent,
    HttpRequestComponent
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
