import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonBallPageComponent } from './pages/dragon-ball-page/dragon-ball-page.component';
import { PetsPageComponent } from './pages/pets-page/pets-page.component';
import { PetsPageSuperComponent } from './pages/pets-page-super/pets-page-super.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },

  {
    path: 'dragonball',
    component: DragonBallPageComponent
  },
  {
    path: 'pets',
    component: PetsPageComponent
  },
  {
    path: 'pets-super',
    component: PetsPageSuperComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];
