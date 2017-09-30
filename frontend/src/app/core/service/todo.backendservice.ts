import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions, RequestOptionsArgs } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Todo } from '../model/todo';

@Injectable()
export class TodoBackendService {

  private url: string = "/todo";
  /**
   * Service expects a user account associated with TODO.
   * Since scope of this app doesnt cover user management and Authentication,
   * hardcoding to admin user for demo purpose
   */
  private userName: string = "admin";
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getTodos(){
    return this.http.get(this.url+"/list/"+this.userName)
      .map(res => res.json());
  }

  getTodosByStatus(completed:boolean){
    return this.http.get(this.url+"/list/"+this.userName+"/"+completed)
      .map(res => res.json());
  }
   
  saveTodo(Todo){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    Todo.userName=this.userName;
    return this.http.post(this.url+"/save", JSON.stringify(Todo),
    {headers: this.headers})
      .map(res => res.json());
  }

  markAsComplete(Todo){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + "/mark/" + Todo.id, {headers: this.headers})
      .map(res => res.json());
  }

  deleteTodo(id){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + "/delete/" + id,'',{headers: this.headers})
      .map(res => res.json());
  }

   
}