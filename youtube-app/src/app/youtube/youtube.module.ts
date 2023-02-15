import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { DetailedinformationpageComponent } from './detailedinformationpage/detailedinformationpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    DetailedinformationpageComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
