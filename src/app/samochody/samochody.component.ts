import { Component, Input } from '@angular/core';
import { Samochod } from '../samochod';

@Component({
  selector: 'app-samochody',
  templateUrl: './samochody.component.html',
  styleUrls: ['./samochody.component.css']
})
export class SamochodyComponent {
  @Input() tytul: string = '';
@Input() samochody: Samochod[] = [];
}

