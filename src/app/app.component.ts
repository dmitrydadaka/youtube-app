import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminCardItem } from './admin/admin-card.model';
//import { AppState } from './store/reducers';
//import { State } from './store/state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube-app';
  public adminCards$!: any;
  public mainRouter!: boolean;
  constructor(
    private router: Router
    //private store: Store<AppState>
    ) {
      if (this.router.url === '/') this.mainRouter = true;
      else this.mainRouter = false;
    }

  ngOnInit(): void {
   // this.store.select((store) => this.adminCards$ = store.adminCards);
  }


}
