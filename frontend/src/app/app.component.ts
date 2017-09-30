

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license


import { Component } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { TodoService } from './core/service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDarkTheme: boolean = true;

  constructor(private todoService: TodoService) {

  }

  viewCompleted() {
    this.todoService.getTodosByStatus(true);
  }
  viewPending() {
    this.todoService.getTodosByStatus(false);
  }




}
