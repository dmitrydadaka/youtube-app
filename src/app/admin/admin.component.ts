import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CustomValidators } from '../shared/custom-validators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public title!: string;
  public description!: string;
  public creationDate!: Date;
  public checkForTheUrlValidity!: boolean;
  public linkToTheImageCover!: string;
  public adminForm!: FormGroup;

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
    this.adminForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      description: new FormControl('', [
        Optional,
        Validators.minLength(8),
        Validators.maxLength(255)
      ]),
      creationDate: new FormControl('', [
        Validators.required
      ]),
      checkForTheUrlValidity: new FormControl('', [
        Validators.required,
      ]),
      linkToTheImageCover: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  public onSubmit() {
    this.router.navigate(['']);
  }

  public logout() {
    this.router.navigate(['login']);
  }

}
