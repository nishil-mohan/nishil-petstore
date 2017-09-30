import { Component, Input } from '@angular/core';
import { TodoService } from '../core/service/todo.service';
import { MdDialog } from '@angular/material';
import { ToDoDialogComponent } from './dialog/todoDialog.component';

@Component({
  selector: 'app-toDo',
  templateUrl: './todolist.html',
  styleUrls: ['./todolist.scss']
})
export class ToDoListComponent {

  ngOnInit() {
     
      this.todoService.getTodos(); 
  }

  constructor( private todoService: TodoService,public dialog: MdDialog) {
  }

getTodoList(){
  return this.todoService.TodoRecords;
}
  todoDialog() {
    let dialogRef = this.dialog.open(ToDoDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

     });
  }

  remove(todo) {
    this.todoService.deleteTodo(todo);
  }

  completeTodo(todo){
    this.todoService.markAsCompleteTodo(todo);
  }

  addTodo(title) {
    const todo = {title: title, completed: false};
    this.todoService.saveTodo(todo);
   
  }

   

}