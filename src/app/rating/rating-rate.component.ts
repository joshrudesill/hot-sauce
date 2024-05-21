import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-rating-rate',
  standalone: true,
  imports: [],
  template: `
    <div class="flex">
      <div
        style="width: 20px; height: 40px"
        [class]="
          rating >= star * 2 - 1
            ? 'bg-black rounded-s-3xl'
            : 'bg-red-500 rounded-s-3xl'
        "
        (mouseup)="setLocalRating(star * 2 - 1)"
        (mouseenter)="setHoverRating(star * 2 - 1)"
        (mouseenter)="setHoverState(true)"
        (mouseleave)="setHoverState(false)"
      ></div>
      <div
        style="width: 20px; height: 40px"
        [class]="
          rating >= star * 2
            ? 'bg-black rounded-e-3xl'
            : 'bg-red-500 rounded-e-3xl'
        "
        (mouseup)="setLocalRating(star * 2)"
        (mouseenter)="setHoverRating(star * 2)"
        (mouseenter)="setHoverState(true)"
        (mouseleave)="setHoverState(false)"
      ></div>
    </div>
  `,
})
export class RatingRateComponent {
  @Input() star = 0;
  @Input() rating = 0;
  ratingChange = output<number>();
  hoverStateChange = output<boolean>();
  hoverRatingChange = output<number>();
  setLocalRating(value: number) {
    this.ratingChange.emit(value);
  }
  setHoverState(hoverState: boolean) {
    this.hoverStateChange.emit(hoverState);
  }
  setHoverRating(hoverRating: number) {
    this.hoverRatingChange.emit(hoverRating);
  }
}
