import { AdminCardItem } from '../../admin/admin-card.model';
import { AdminCardAction, AdminCardActionType } from '../actions/admin-card.action'
import { State } from '../state.model';
//create a dummy initial state
const initialState: AdminCardItem[] = [
  {
    title: '1',
    description: 'Computer Engineering',
    creationDate: 'C++ Programming',
    checkForTheUrlValidity: 'sss',
    linkToTheImageCover: 'ddd'
  },
]

export function AdminCardReducer(
  state: AdminCardItem[] = initialState,
  action: AdminCardAction
): AdminCardItem[] | undefined {
  switch (action.type) {
    case AdminCardActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}

