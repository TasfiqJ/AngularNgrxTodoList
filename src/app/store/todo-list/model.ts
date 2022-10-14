export namespace TodoModel {
  export class AppState {
    taskList: TodoTask[] = [];
  }

  export class TodoTask {
    public isCompleted: boolean = false;
    constructor(public title: string) {}
  }
}
