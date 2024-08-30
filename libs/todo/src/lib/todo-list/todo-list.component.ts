import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTodoComponent } from '../add-todo/add-todo.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITodo } from '@angular-monorepo/models';
import { removeTodo } from '@angular-monorepo/store';

@Component({
  selector: 'lib-todo-list',
  standalone: true,
  imports: [CommonModule, AddTodoComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  todos$!: Observable<ITodo[]>;

  constructor(private store: Store<{ todos: { list: ITodo[] } }>) {
    this.todos$ = this.store.select((state) => state.todos.list);
  }

  handleRemoveTodo(id: string) {
    this.store.dispatch(removeTodo({ id }));
  }
}
