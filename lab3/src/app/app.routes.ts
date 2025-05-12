import { Routes } from '@angular/router';
import { KlienciComponent } from './klienci/klienci.component';
import { OsobyComponent } from './osoby/osoby.component';
import { FilmyComponent } from './filmy/filmy.component';

export const routes: Routes = [
    {path: 'klienci', component: KlienciComponent},
    {path: 'osoby', component: OsobyComponent},
    {path: 'filmy', component: FilmyComponent},
    {path: '', redirectTo: 'osoby', pathMatch: 'full'},
];
