import { createAction, props } from '@ngrx/store';
import { TodoModel } from './model';

export namespace TodoActions {
  
  export const addTaskItem = createAction(
    'Add a task',
    props<{ task: TodoModel.TodoTask }>()
  );
}
