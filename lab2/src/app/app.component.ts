import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OsobaComponent } from './osoba/osoba.component';
import { Osoba } from '../models/osoba.class';
import { LicznikComponent } from './licznik/licznik.component';
import { CommonModule } from '@angular/common';
import { ZaznaczoneOsobyComponent } from './zaznaczone-osoby/zaznaczone-osoby.component';

@Component({
  selector: 'app-root',
  imports: [OsobaComponent, LicznikComponent, CommonModule, ZaznaczoneOsobyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'zajecia';
  osoby: Osoba[] = [
    new Osoba("Dawid", "Kuś", 33, false),
    new Osoba("Kacper", "Wdowik", 44, false),
    new Osoba("Piotr", "Szczepanik", 13, true),
    new Osoba("Ryszard", "Partyka", 41, false),
    new Osoba("Jakub", "Olech", 25, true),
    new Osoba("Krystian", "Kozłowski", 14, false),
    new Osoba("Daniel", "Błaszczykowski", 93, false),
    new Osoba("Kamil", "Błaut", 79, true),
  ];

  licznik = 0;
  wyswietlLicznik = true;

  constructor() {
    for(let os of this.osoby) {
      if(os.czyWyrozniona) {
        this.licznik++;
      }
    }
  }

  onZmianaWyroznienia(event: Osoba): void {
    event.czyWyrozniona = !event.czyWyrozniona;
    if(event.czyWyrozniona) {
      this.licznik++;
    } 
    else {
      this.licznik--;
    }
  }
}
