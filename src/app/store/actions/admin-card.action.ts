import { Action } from '@ngrx/store';
import { AdminCardItem } from '../../admin/admin-card.model';

export enum AdminCardActionType {
  ADD_ITEM = '[Admin-Card] Add Card',
}
export class AddItemAction implements Action {
  readonly type = AdminCardActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: AdminCardItem) { }
}
export type AdminCardAction = AddItemAction;
