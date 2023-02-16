import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, every, filter, map, tap } from 'rxjs';
import { data } from '../../../assets/data';
import { Item } from '../search/search-item.model';
import { Results } from '../search/search-response.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Results>("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAvsHFquoefeeAGgdKL0YokahUhrXWkuVY&type=video&part=snippet&maxResults=15&q=js")
      .pipe(map((data: Results) => {
        const itemsList = data["items"];
        return itemsList;
      }));
  }

  onKeydown(searchingValue: string) {

    return this.http.get<Results>("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAvsHFquoefeeAGgdKL0YokahUhrXWkuVY&type=video&part=snippet&maxResults=15&q=js")
      .pipe(
        debounceTime(300),
        map((data: any) => {
          const itemsList: Item[] = data["items"];
          console.log(itemsList);
          return itemsList.filter(item => item.snippet.title.includes(searchingValue));
        })
      )
  }

  getItemsStatisticsAPi() {
    return this.http.get('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAvsHFquoefeeAGgdKL0YokahUhrXWkuVY&id=nq4aU9gmZQk,REu2BcnlD34,qbPTdW7KgOg&part=snippet,statistics')
    .pipe(map((data: any) => {
      const itemsList = data["items"];
      return itemsList;
    }));
  }

}

