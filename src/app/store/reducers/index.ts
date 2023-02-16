import { AdminCardReducer } from './admin-card.reducer';
import { Action, ActionReducerMap } from '@ngrx/store';
import { State } from '../state.model'
import { AdminCardItem } from '../../admin/admin-card.model';


export const rootReducer = {};

export interface AppState {
    adminCards: State['adminCards'] | undefined;
};


export const reducers: ActionReducerMap<AppState, any> = {
    adminCards: AdminCardReducer
};
