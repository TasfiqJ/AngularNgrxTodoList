import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { TodoModel } from './todo-list/model';

/*export const reducers: ActionReducerMap<TodoModel.AppState> = {
  taskList: 
};*/

//export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
