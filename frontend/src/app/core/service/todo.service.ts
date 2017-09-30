import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { TodoBackendService } from './todo.backendservice';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Todo } from '../model/todo';

@Injectable()
export class TodoService {

  _TodoRecords: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>(null);

  get TodoRecords(): Observable<Todo[]> {
    return new Observable(fn => this._TodoRecords.subscribe(fn))
  }

  constructor(private todoBackendService: TodoBackendService) { }

  getTodos() {
    this.todoBackendService.getTodos().subscribe(
      res => {
        this._TodoRecords.next(res);
      }

    );
  }

  getTodosByStatus(completed:boolean) {
    this.todoBackendService.getTodosByStatus(completed).subscribe(
      res => {
        this._TodoRecords.next(res);
      }

    );
  }

  saveTodo(Todo) {
    this.todoBackendService.saveTodo(Todo).subscribe(
      res => {
        let todos: Todo[] = this._TodoRecords.getValue();
        todos.push(res);
        this._TodoRecords.next(todos);
      }
    );
  }

   

  markAsCompleteTodo(Todo) {
    this.todoBackendService.markAsComplete(Todo).subscribe(res => {
      let todos: Todo[] = this._TodoRecords.getValue();
      let itemIndex = todos.findIndex(item => item.id == Todo.id);
      todos[itemIndex] = res;
      this._TodoRecords.next(todos);
    }
    );
  }

  deleteTodo(Todo) {
    let suceess: boolean = false;
    this.todoBackendService.deleteTodo(Todo.id).subscribe(res => {
      let todos: Todo[] = this._TodoRecords.getValue().filter(
        todo => todo.id != Todo.id
      );
      this._TodoRecords.next(todos);
    }
    );
  }

}


