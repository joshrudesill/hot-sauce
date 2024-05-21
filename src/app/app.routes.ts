import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {
    path: 'rating',
    component: RatingComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
];
