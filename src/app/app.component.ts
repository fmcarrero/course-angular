import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'course-angular';
  birthday = new Date(1992, 7, 24); // April 15, 1988
}
