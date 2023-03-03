import { Item } from '../../core/search/search-item.model';
import { ItemsAction, ResultsActionType } from '../actions/item.action'
//create a dummy initial state
const initialState: Item[] = [];

export function ResultsReducer(
  state: Item[] = initialState,
  action: ItemsAction
): Item[] | undefined {
  switch (action.type) {
    case ResultsActionType.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}

