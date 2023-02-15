import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../search-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() items: Item[] = [];

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  getMoreInformation(item: Item) {
    const itemToString = JSON.stringify(item)
    localStorage.setItem( 'itemToString', itemToString);
    this.router.navigate(['/about']);
  }
}
