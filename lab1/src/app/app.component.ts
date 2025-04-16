import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OsobaComponent } from './osoba/osoba.component';
import { Osoba } from '../models/osoba.class';
import { LicznikComponent } from './licznik/licznik.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OsobaComponent, LicznikComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab1';
  osoby: Osoba[] = [
    new Osoba("Dawid", "Kuś", 21, false),
    new Osoba("Piotr", "Szczepanik", 21, false),
    new Osoba("Kacper", "Wdowik", 21, false),
    new Osoba("Ryszard", "Partyka", 21, false),
    new Osoba("Rafał", "Golasz", 21, false),
  ];

  licznik = 0;
  wyswietlLicznik = true;

  onZmianaWyroznienia(event: Osoba) : void{
    event.czyWyrozniona = !event.czyWyrozniona;
    if(event.czyWyrozniona){
      this.licznik++;
    }
    else{
      this.licznik--;
    }
  }
}
