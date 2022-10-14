import { state } from '@angular/animations';
import { createSelector, State } from '@ngrx/store';
import { TodoModel } from './model';

export namespace TodoSelectors {
  export const selectTaskListAll = (state: {reducer: TodoModel.AppState}) =>
    state.reducer.taskList;

  export const selectTaskListNotCompleted = createSelector<any, any, any>(
    selectTaskListAll,
    (state: TodoModel.TodoTask[]) => {console.log(state); return[]}
  //     state?.filter((t: TodoModel.TodoTask) => {
  //       return t.isCompleted === false;
  //     })
  );

  export const retrieveTaskListFromStore = createSelector<any, any, any>(
    selectTaskListAll,
    (state: TodoModel.TodoTask[]) => {console.log(state); return[]}
      // state?.filter((t: TodoModel.TodoTask) => {
      //   return t.title;
      // })
  );
}