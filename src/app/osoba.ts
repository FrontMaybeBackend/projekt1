//Lab1
// export class Osoba {
//     id: number | undefined;
//     imie?: string; // ? - określa opcjonalność zmiennej
//     nazwisko?: string;
//   }
//Lab1 lub 2
export class Osoba {
    constructor(public imie: string, public czyStudent: boolean, public wiek: number){}
  }