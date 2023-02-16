import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedinformationpageComponent } from './detailedinformationpage/detailedinformationpage.component';

const routes: Routes = [
  { path: '', component: DetailedinformationpageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
