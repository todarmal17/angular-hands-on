import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './auth-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import {
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { SessionManagerService } from './manager/session-manager.service';
import { AuthService } from './auth.service';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
    AuthGuardService,
    SessionManagerService,
    AuthService
  ]
})
export class SharedModule { }
