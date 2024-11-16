import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Basketball Players</h3>
    <ul>
      <li *ngFor="let student of basketballPlayers">{{ student.name }}</li>
    </ul>
  `
})
export class AppComponent {
  students = [
    { name: 'Alice', game: 'Basketball' },
    { name: 'Bob', game: 'Football' },
    { name: 'Charlie', game: 'Basketball' }
  ];

  basketballPlayers = this.students.filter(student => student.game === 'Basketball');
}
