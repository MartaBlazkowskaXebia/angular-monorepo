import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '@angular-monorepo/store';

@Component({
  selector: 'lib-add-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  name = new FormControl('');
  isDone = new FormControl(false);

  constructor(private store: Store) {}

  handleAddTodo() {
    if (!this.name.value) return;

    this.store.dispatch(
      addTodo({
        userId: 1,
        id: uuidv4(),
        title: this.name.value,
        completed: !!this.isDone.value,
      })
    );
    this.name.setValue('');
    this.isDone.setValue(false);
  }
}
