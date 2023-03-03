import { AdminCardItem } from '../admin/admin-card.model';
import { Item } from '../core/search/search-item.model';

export interface State {
  adminCards: Array<AdminCardItem>;
  items: Array<Item>;
}
