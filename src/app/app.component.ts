import { Component, OnInit } from '@angular/core';
import { Samochod } from './samochod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  studenci: string[] = [];
  isCreated = false;
  ngOnInit(): void {
  this.studenci = ['Karol', 'Basia', 'Adam', 'Teresa', 'Wojciech',
  'Ziemowit'];
  }
  onAddStudent(studentName: string) {
  if (this.studenci.includes(studentName)) {
  this.isCreated = true;
  } else {
  this.isCreated = false;
  this.studenci.push(studentName);
  }
  
  }
  onUsunStudent(studentId: number) {
  this.isCreated = false;
  this.studenci.splice(studentId, 1);
  }


  }