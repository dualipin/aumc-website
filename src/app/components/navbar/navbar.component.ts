import { Component } from "@angular/core"
import { Links } from "./navbar.link"

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
  private systemDarkModePreference = window.matchMedia(
    "(prefers-color-scheme: dark)",
  )

  //Links of the navbar
  links = Links

  isDarkMode = this.systemDarkModePreference.matches

  constructor() {
    this.changeTheme()
    this.systemDarkModePreference.onchange = () => this.changeTheme()
  }

  changeTheme() {
    const $favicon: HTMLLinkElement = document.querySelector(
      "link[rel='shortcut icon']",
    ) as HTMLLinkElement

    if (this.isDarkMode) {
      $favicon.href = "assets/icon/favicon-d.ico"
      document.documentElement.classList.add("dark")
    } else {
      $favicon.href = "assets/icon/favicon-l.ico"
      document.documentElement.classList.remove("dark")
    }
    this.isDarkMode = !this.isDarkMode
  }
}
