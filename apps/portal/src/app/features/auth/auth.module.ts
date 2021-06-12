import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInView } from './views/sign-in/sign-in.view';
import { ReactiveFormsModule } from '@angular/forms';
import { GlxIconModule } from '@galaxy/components/icon';
import { GlxButtonModule } from '@galaxy/components/button';

@NgModule({
  declarations: [
    SignInView
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    GlxIconModule,
    GlxButtonModule
  ]
})
export class AuthModule { }
