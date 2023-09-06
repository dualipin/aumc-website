import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  onDeactivate() {
    window.scrollTo(0, 0);
    // Alternatively, you can scroll to top by using this other call:
    // window.scrollTo(0, 0)
  }
}
