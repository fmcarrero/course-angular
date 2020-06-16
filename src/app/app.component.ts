import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { of, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'course-angular';
  birthday = new Date(1992, 7, 24); // April 15, 1988

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.showConfig();
    this.operator();
  }

  showConfig() {
    this.configService.makeCall().subscribe((data) => {
      console.log(data);
    });
  }

  operator() {
    const nums = of(1, 2, 3, 5, 66, 8);
    const alCuadrado = pipe(
      filter((n: number) => n % 2 === 0),
      map((n) => n * n)
    );

    const cuadrado = alCuadrado(nums);
    cuadrado.subscribe((x) => {
      console.log(x);
    });
  }
}
