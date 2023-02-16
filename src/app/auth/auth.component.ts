import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/custom-validators';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public email!: string;
  public password!: string;
  public isLogged!: string;
  public LoginForm!: FormGroup;
 // public admin: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this._createForm();
  }

  ngOnInit(): void {
   // if(this.admin === true) this.router.navigate(['login/admin']);
   }


  private _createForm() {
    this.LoginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, Validators.compose([
        Validators.required,
        CustomValidators.patternValidator(/\d/, { hasNumber: true}),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true}),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true}),
        Validators.minLength(8)
      ]))
    });
  }

  public onSubmit() {
    this.authService.onSubmit(this.LoginForm.value['email'], this.LoginForm.value['password']);
    this.router.navigate(['']);
  }

  public logout() {
    this.router.navigate(['login']);
  }

}
