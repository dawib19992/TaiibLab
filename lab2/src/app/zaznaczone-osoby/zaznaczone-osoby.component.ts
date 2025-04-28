import { Component, inject, OnDestroy } from '@angular/core';
import { ZaznaczoneOsobyService } from '../zaznaczone-osoby.service';
import { CommonModule } from '@angular/common';
import { Osoba } from '../../models/osoba.class';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-zaznaczone-osoby',
  imports: [CommonModule],
  templateUrl: './zaznaczone-osoby.component.html',
  styleUrl: './zaznaczone-osoby.component.css'
})
export class ZaznaczoneOsobyComponent implements OnDestroy{
  private readonly zaznaczoneOsobyService = inject(ZaznaczoneOsobyService);

  // get zaznaczoneOsoby():Osoba[] {
  //   return this.zaznaczoneOsobyService.zaznaczoneOsoby;
  // }

  // private readonly subskrypcja = new Subscription();

  zaznaczoneOsoby!: Osoba[];

  private static licznik = 1;
  private intervalId!:any;
  public readonly zaznaczoneOsoby$: Observable<Osoba[]> = this.zaznaczoneOsobyService.getZaznaczoneOsoby();

  constructor(){
    // const sub = this.zaznaczoneOsobyService.getZaznaczoneOsoby().subscribe(osoby => {
    //   this.zaznaczoneOsoby = osoby;
    //   console.log('odebrano informacje');
    // });
    let licznik = ZaznaczoneOsobyComponent.licznik++;
    // this.subskrypcja.add(sub);
    const intervalId = setInterval(() => console.log('interval', licznik), 100);
    this.intervalId = intervalId;
  }
  ngOnDestroy(): void {
    // this.subskrypcja.unsubscribe();
    
  }
  odznacz(osoba: Osoba): void{
    this.zaznaczoneOsobyService.odznacz(osoba)  
  }
}
