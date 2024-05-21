import { HttpClient } from '@angular/common/http';
import { Component, Injectable, WritableSignal, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: ` <div>
    <select [formControl]="select">
      <option [value]="0">N</option>
      <option [value]="1">R</option>
    </select>
    @for (item of items(); track $index) {
    <p>{{ item.id }}</p>
    }
  </div>`,
})
@Injectable({ providedIn: 'root' })
export class ListComponent {
  items: WritableSignal<Post[]> = signal([]);
  select = new FormControl('0');
  constructor(private http: HttpClient) {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        this.items.update((_) => res);
      });
    this.select.valueChanges.subscribe((v) => this.orderChange(v));
    console.log(this.select.defaultValue);
  }

  orderChange(order: string | null) {
    console.log(typeof order);
    switch (order) {
      case '0':
        this.items.update((items) => items.sort((a, b) => a.id - b.id));
        break;
      case '1':
        this.items.update((items) => items.sort((a, b) => b.id - a.id));
        break;
    }
  }
}
