import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { AddItemAction } from '../store/actions/admin-card.action';

//import { CustomValidators } from '../shared/custom-validators';

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
  public adminCards$!: any;


 // public admin: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this._createForm();
  }

  ngOnInit(): void {
    this.adminCards$ = this.store.select((store) => store.adminCards);
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

  public addToStoreNewAdminCards() {
    this.store.dispatch(new AddItemAction(this.adminForm.value));
    this.adminForm.reset();
  }

}
