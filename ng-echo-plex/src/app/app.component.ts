import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  signal = 'app';
  logEvent(event) {
    console.log(event);
  }

  setVal() {
    this.signal = 'Hello';
  }

  setInterval(echoCmp: any) {
    echoCmp.setDelayTime(200);
  }
}
