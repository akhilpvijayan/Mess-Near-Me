import { Routes } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { HomePage } from './home/home.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'home', component: HomePage }
];
