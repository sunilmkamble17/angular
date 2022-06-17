import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/public/login/login.component';
import { ForgotPasswordComponent } from './modules/public/forgot-password/forgot-password.component';
import { SignupComponent } from './modules/public/signup/signup.component';
import { PublicComponent } from './modules/public/public.component';
import { SecureComponent } from './modules/secure/secure.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './modules/secure/dashboard/dashboard.component';
import { HeaderComponent } from './modules/layouts/header/header.component';
import { FooterComponent } from './modules/layouts/footer/footer.component';
import { SideNavComponent } from './modules/layouts/side-nav/side-nav.component';
import { NetworkComponent } from './modules/secure/network/network.component';
import { RbcComponent } from './modules/secure/rbc/rbc.component';
import { UserComponent } from './modules/secure/user/user.component';
import { DeploymentComponent } from './modules/secure/deployment/deployment.component';
import { ControlCenterComponent } from './modules/secure/control-center/control-center.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,
    PublicComponent,
    SecureComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    DashboardComponent,
    NetworkComponent,
    ControlCenterComponent,
    RbcComponent,
    UserComponent,
    DeploymentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
