import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OsobaComponent } from './osoba/osoba.component';
import { Osoba } from '../models/osoba.class';
import { LicznikComponent } from './licznik/licznik.component';
import { CommonModule } from '@angular/common';
import { ZaznaczoneOsobyComponent } from './zaznaczone-osoby/zaznaczone-osoby.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'zajecia';
}
