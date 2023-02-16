import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './core/header/header.component';
import { PagenotfoundComponent } from './youtube/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'about', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
  { path: '**', component: PagenotfoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
