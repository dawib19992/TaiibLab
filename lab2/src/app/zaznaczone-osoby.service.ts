import { Injectable } from '@angular/core';
import { Osoba } from '../models/osoba.class';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ZaznaczoneOsobyService {

  private zaznaczoneOsoby: Osoba[] = [];
  constructor() { }
  
  //private zaznaczoneOsobySubject = new Subject<Osoba[]>();
  private zaznaczoneOsobySubject = new BehaviorSubject<Osoba[]>([]);
  private odznaczoneSubject = new Subject<Osoba>();
  public getZaznaczoneOsoby() : Observable<Osoba[]> {
    return this.zaznaczoneOsobySubject.asObservable();
  }
  public getOdznaczenie(): Observable<Osoba>{
    return this.odznaczoneSubject.asObservable();
  }
  
  public zaznacz(osoba: Osoba): void{
    // this.zaznaczoneOsoby.push(osoba);
    let tab = this.zaznaczoneOsobySubject.value;
    tab.push(osoba);
    this.zaznaczoneOsobySubject.next(tab);  

  }
  public odznacz(osoba: Osoba): void{
    // this.zaznaczoneOsoby = this.zaznaczoneOsoby.filter(o => o !== osoba);
    let tab = this.zaznaczoneOsobySubject.value;
    tab = tab.filter(o => o !== osoba);
    this.zaznaczoneOsobySubject.next(tab);  
  }

}
