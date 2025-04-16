import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Osoba } from '../../models/osoba.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-osoba',
  imports: [CommonModule],
  templateUrl: './osoba.component.html',
  styleUrl: './osoba.component.css'
})
export class OsobaComponent {
  @Input() osoba!: Osoba;
  @Output()  zmianaWyroznienia = new EventEmitter<Osoba>();

  constructor(){
    
  }

  onWyroznijClick(): void {
    //this.osoba.czyWyrozniona = !this.osoba.czyWyrozniona;
    this.zmianaWyroznienia.emit(this.osoba);
  }
}
