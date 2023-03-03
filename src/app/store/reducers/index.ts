import { AdminCardReducer } from './admin-card.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { State } from '../state.model'
import { ResultsReducer } from './item.reducer';


export const rootReducer = {};

export interface AppState {
    adminCards: State['adminCards'] | undefined;
    items: State['items'] | undefined;
};


export const reducers: ActionReducerMap<AppState, any> = {
    adminCards: AdminCardReducer,
    items: ResultsReducer
};
