import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReporteDeEstadoWeb';
  constructor() {
    let counter = 1
    setInterval(() => {
      counter++
      if (counter > 60) { location.reload(); counter = 1 }
    }, 1000)
  }
}
