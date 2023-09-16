import { Component, OnInit } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import * as Aos from 'aos'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    Aos.init()
  }
  title = "page-aumc"

  onDeactivate() {
    window.scrollTo(0, 0)
    // Alternatively, you can scroll to top by using this other call:
    // window.scrollTo(0, 0)
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    )
  }
}
