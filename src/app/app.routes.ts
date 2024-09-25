
import { Routes } from '@angular/router';
import { MainComponent } from './module/main/main.component';
import { IncioComponent } from './module/incio/incio.component';

export const routes: Routes = [
    { path: 'curiosidades', component: MainComponent },
    { path: 'home', component: IncioComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' } 
];
