import { Item } from "./search-item.model";

export interface Results {
  kind: string;
  etag:string;
  pageInfo: PageInfo;
  items: Item;
  regionCode: string;
  nextPageToken: string;
}

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
