import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../search-item.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { AddItemAction } from '../../../store/actions/admin-card.action';
import { AddResultsItemAction } from '../../../store/actions/item.action';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() items: Item[] = [];

  constructor(
    private router: Router,
    private store: Store<AppState>
    ) {
    //this.items.every( i => this.store.dispatch(new AddResultsItemAction(i)) )
   }

  ngOnInit(): void {
  }

  getMoreInformation(item: Item) {
    const itemToString = JSON.stringify(item)
    localStorage.setItem( 'itemToString', itemToString);
    this.router.navigate(['/about']);
  }
}
