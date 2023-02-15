import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AdminComponent } from './admin/admin.component';
import { AdminCardReducer } from './store/reducers/admin-card.reducer';
import { StoreModule } from '@ngrx/store';
//import { reducers } from './store/reducers/';
//import { counterReducer } from './store/reducers/counter.reducer';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    //StoreModule.forRoot({count: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
