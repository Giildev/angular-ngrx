import { Component } from '@angular/core';
import { TodoListComponent } from './todo/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListComponent],
  template: `
    <h1>My Todo App</h1>
    <app-todo-list></app-todo-list>
  `
})
export class AppComponent { }