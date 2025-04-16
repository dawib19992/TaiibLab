import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-licznik',
  imports: [],
  templateUrl: './licznik.component.html',
  styleUrl: './licznik.component.css'
})
export class LicznikComponent {
    @Input() licznik = 0;
    @Input() opis = '';
}
