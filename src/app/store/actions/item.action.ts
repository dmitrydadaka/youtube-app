import { Action } from '@ngrx/store';
import { Item } from '../../core/search/search-item.model';

export enum ResultsActionType {
  ADD_ITEM = '[Item] Add Card',
}
export class AddResultsItemAction implements Action {
  readonly type = ResultsActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: Item) { }
}
export type ItemsAction = AddResultsItemAction;
