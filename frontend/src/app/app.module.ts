

// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
                    

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { TodoService } from './core/service/todo.service';

import {MdTableModule} from '@angular/material'; 
 
import {MdToolbarModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdGridListModule, MdDialogModule, MdInputModule,MdButtonModule,MdCheckboxModule } from '@angular/material';

import 'hammerjs';
import { ToDoListComponent } from './todo/todolist.component';
import { ToDoDialogComponent } from './todo/dialog/todoDialog.component';
import { TodoBackendService } from './core/service/todo.backendservice';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,FormsModule,
    HttpModule,
    MdDialogModule,
    MdCheckboxModule,
    MdButtonModule,
    MdTableModule,
    FlexLayoutModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule
    
  ],
  entryComponents: [
    AppComponent, ToDoDialogComponent
  ],
  providers: [
    TodoService,TodoBackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



// Copyright 2016 Google Inc. All Rights Reserved.
// Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at https://angular.io/license
            
