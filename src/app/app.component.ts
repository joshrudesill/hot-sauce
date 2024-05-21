import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hot-sauce';
  count = signal(0);
  increate() {
    this.count.update((v) => v + 1);
  }
  decrease() {
    this.count.update((v) => v - 1);
  }
}
