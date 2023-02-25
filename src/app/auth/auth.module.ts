import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptorService} from './authInterceptorService';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: [],

  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useFactory: AuthInterceptorService,
    multi: true
   }
  ],

})
export class AuthModule { }
