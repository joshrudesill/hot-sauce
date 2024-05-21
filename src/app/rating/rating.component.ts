import { Component } from '@angular/core';
import { RatingRateComponent } from './rating-rate.component';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [RatingRateComponent],
  template: `
    <div class="flex gap-2">
      Rating: {{ rating }}
      <div class="flex">
        @for (i of looper; track $index) {
        <app-rating-rate
          [star]="i"
          [rating]="showingHoverState ? hoverRating : rating"
          (ratingChange)="setRating($event)"
          (hoverStateChange)="setHoverState($event)"
          (hoverRatingChange)="setHoverRating($event)"
        />
        }
      </div>
    </div>
  `,
})
export class RatingComponent {
  looper: number[] = [];
  rating = 0;
  showingHoverState = false;
  hoverRating = 0;
  constructor() {
    this.looper = Array(5)
      .fill(0)
      .map((e, i) => i + 1);
  }
  setRating(value: number) {
    this.rating = value;
  }
  setHoverState(hoverState: boolean) {
    this.showingHoverState = hoverState;
    if (!hoverState) {
      this.hoverRating = 0;
    }
  }
  setHoverRating(hoverRating: number) {
    this.hoverRating = hoverRating;
  }
}
