import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { TodoService } from '../../core/service/todo.service';

@Component({
  selector: 'todo-dialog',
  templateUrl: './todoDialog.html',
  styleUrls: ['./tododialog.scss']
})
export class ToDoDialogComponent implements OnInit {

  value: string;

  constructor(
    public dialogRef: MdDialogRef<ToDoDialogComponent>,
    public todoService: TodoService,
  ) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  addTodo() {
    const todo = { description: this.value, completed: false };
    this.todoService.saveTodo(todo);
    this.dialogRef.close();
  }

}