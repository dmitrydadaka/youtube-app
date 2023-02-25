import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public email!: string;
  public password!: string;
  public authToken!: string;

  constructor() { }

  onSubmit(enteredEmail: string, enteredPassword: string) {
    this.email = enteredEmail;
    this.password = enteredPassword;
    this.authToken = this.email + this.password + '123456789'
    localStorage.setItem('authToken', this.authToken);
    localStorage.setItem('email', this.email);
  }

  logout() {
    this.authToken = '';
    this.email = '';
    this.password = '';
    localStorage.removeItem('authToken');
    localStorage.removeItem('email');
  }

  getAuthToken() {
    return localStorage.getItem('authToken')
  }
}
