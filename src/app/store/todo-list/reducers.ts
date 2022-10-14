import { state } from '@angular/animations';
import { provideCloudinaryLoader } from '@angular/common';
import { Action, createAction, createReducer, on } from '@ngrx/store';
import { TodoActions } from './actions';
import { TodoModel } from './model';

export namespace ReducerSelector {
  export const initialState: TodoModel.AppState = new TodoModel.AppState();

  export const taskListReducer = createReducer(
    initialState,
    on(TodoActions.addTaskItem, (state, action) => ({
      ...state,
      taskList: [...state.taskList||[], action.task],
    }))
  );

  export function reducer(
    state: TodoModel.AppState | undefined,
    action: Action
  ): any {
    return taskListReducer(state, action);
  }
}
