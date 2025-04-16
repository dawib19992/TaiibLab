export class Osoba {
    //imie: string;
    nazwisko: string;
    wiek: number;
    czyWyrozniona: boolean;

    constructor(public imie: string, nazwisko: string, wiek: number, czyWyrozniona: boolean){
        //this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.czyWyrozniona = czyWyrozniona;
    }
}