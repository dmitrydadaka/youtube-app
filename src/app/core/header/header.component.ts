import { Component, Inject, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from '../search/search-item.model';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Results } from '../search/search-response.model';
import { Subscription, tap } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public items!: any;
  public criterionsBlock: boolean = false;
  public authToken: string = localStorage.getItem('authToken') || '';
  public nickName: string = localStorage.getItem('email') || 'your name';
  public logoutVision: boolean = false;
  private subscription!: Subscription;

  constructor(
    private dataService: DataService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.subscription = this.dataService.getItems().subscribe(response => this.items = response);
    return this.subscription;
    //else for statistics this.dataService.getItemsStatisticsAPi().subscribe( response => this.items = response);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onKeydown(searchingValue: string) {
    let preventCallApi = '';
    preventCallApi += searchingValue;
    if (preventCallApi.length < 3) return;

    this.dataService.onKeydown(searchingValue).subscribe(response => this.items = response);

  }

  addCriterions() {
    if (this.criterionsBlock) {
      this.criterionsBlock = false;
    } else {
      this.criterionsBlock = true;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  toAdminPage() {
    this.router.navigate(['admin']);
  }

  toLogoutVision() {
    if(!this.logoutVision) this.logoutVision = true;
    else this.logoutVision = false;
  }
}
