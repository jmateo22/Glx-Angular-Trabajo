import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'apps/portal/src/app/commons/forms/custom.validators';
import { SessionHttpService } from 'apps/portal/src/app/commons/services/session-http.service';
import { AuthHttpService } from '../../commons/services/auth-http.service';


@Component({
  templateUrl: './sign-in.view.html',
  styleUrls: ['./sign-in.view.css']
})
export class SignInView implements OnInit {
  signInForm: FormGroup;

  get passwordControl(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  get emailControl(): FormControl {
    return this.signInForm.get('email') as FormControl;
  }

  constructor(private builder: FormBuilder,
              private authHttp: AuthHttpService,
              private session: SessionHttpService) {
    this.signInForm = this.builder.group({
      email: [null, [Validators.required, CustomValidators.emailFormat]],
      password: [null, [Validators.required, Validators.maxLength(10)]],
   });
  }

  ngOnInit(): void {
  }

  signIn(): void {
    console.log(this.signInForm.value);
    if (this.signInForm.valid){
      this.authHttp.signIn(this.signInForm.value).subscribe(
        token => this.session.saveSession(token.accessToken) );
    }}
}
