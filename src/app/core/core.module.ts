import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
