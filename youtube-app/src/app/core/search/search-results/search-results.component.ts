import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Item } from '../search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  @Input() items!: Item[];
  @Input() criterionsBlock!: boolean;
  private toSortByOldDateToNewDate: boolean = false;
  private toSortByLessToMoreCountOfViews: boolean = false;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmitResults(searchingResultsValue: string) {
    this.items = this.items
      .filter(item => item.snippet.description.includes(searchingResultsValue));
    return this.items;
  }

  sortingByDate() {
    //this.dataService.getItemsStatisticsAPi().subscribe( response => this.items = response);

    if (!this.toSortByOldDateToNewDate) {
      this.items = this.items.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
      this.toSortByOldDateToNewDate = true;
      console.log(this.items);
    } else {
      this.items = this.items.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
      this.toSortByOldDateToNewDate = false;
    }
  }

  sortingByCountOfViews() {
    //this.dataService.getItemsStatisticsAPi().subscribe( response => this.items = response);

    if (!this.toSortByLessToMoreCountOfViews) {
      this.toSortByLessToMoreCountOfViews = true;
      return this.items.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
    } else {
      this.toSortByLessToMoreCountOfViews = false;
      return this.items.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));

    }
  }

}
