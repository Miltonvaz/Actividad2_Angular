
import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { IncioComponent } from './components/incio/incio.component';

export const routes: Routes = [
    { path: 'curiosidades', component: MainComponent },
    { path: 'home', component: IncioComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' } 
];
