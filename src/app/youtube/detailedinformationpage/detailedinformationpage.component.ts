import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Item } from '../../core/search/search-item.model';

@Component({
  selector: 'app-detailedinformationpage',
  templateUrl: './detailedinformationpage.component.html',
  styleUrls: ['./detailedinformationpage.component.scss']
})
export class DetailedinformationpageComponent implements OnInit {

  public item!: Item;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.item = JSON.parse(localStorage.getItem('itemToString')!);
    localStorage.removeItem('itemToString');
  }
  backToTheMain() {
    this.router.navigate(['/'])
  }
}
