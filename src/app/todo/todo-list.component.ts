import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import * as TodoActions from './todo.actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Todo List</h2>
    <input #todoInput (keyup.enter)="addTodo(todoInput.value); todoInput.value = ''">
    <button (click)="addTodo(todoInput.value); todoInput.value = ''">Add Todo</button>
    <ul>
      <li *ngFor="let todo of todos$ | async">
        <span [class.completed]="todo.completed" (click)="toggleTodo(todo.id)">{{ todo.text }}</span>
        <button (click)="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  `,
  styles: ['.completed { text-decoration: line-through; }']
})
export class TodoListComponent {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<{ todos: { todos: Todo[] } }>) {
    this.todos$ = store.select(state => state.todos.todos);
  }

  addTodo(text: string) {
    if (text.trim()) {
      this.store.dispatch(TodoActions.addTodo({ text }));
    }
  }

  toggleTodo(id: number) {
    this.store.dispatch(TodoActions.toggleTodo({ id }));
  }

  removeTodo(id: number) {
    this.store.dispatch(TodoActions.removeTodo({ id }));
  }
}