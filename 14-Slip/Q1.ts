import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h3>Students Scoring 85% and Above</h3>
    <ul>
      <li *ngFor="let student of highScorers">{{ student.name }}</li>
    </ul>
  `
})
export class AppComponent {
  students = [
    { name: 'Alice', marks: 88 },
    { name: 'Bob', marks: 75 },
    { name: 'Charlie', marks: 90 }
  ];

  highScorers = this.students.filter(student => student.marks >= 85);
}
