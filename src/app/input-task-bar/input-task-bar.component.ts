import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Action } from 'rxjs/internal/scheduler/Action';
import { TodoActions } from '../store/todo-list/actions';
import { TodoModel } from '../store/todo-list/model';
import { TodoSelectors } from '../store/todo-list/selectors';

@Component({
  selector: 'app-input-task-bar',
  templateUrl: './input-task-bar.component.html',
  styleUrls: ['./input-task-bar.component.css'],
})
export class InputTaskBarComponent implements OnInit {
  title = 'Add Button';
  taskList: string[] = [];
  toDoItems$ = this.store.select(TodoSelectors.selectTaskListAll);

  addTask(event: any) {
    const task: TodoModel.TodoTask = new TodoModel.TodoTask(event.target.value);
    this.store.dispatch(TodoActions.addTaskItem({ task }));
    //this.taskList.push(task);
  }

  constructor(private store: Store<{reducer: TodoModel.AppState}>) {
    this.store
      .select(TodoSelectors.selectTaskListNotCompleted)
      .subscribe((taskList) => {
        this.taskList = taskList;
      });
  }

  ngOnInit(): void {}
}
