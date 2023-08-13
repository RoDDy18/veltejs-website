export const clientTheme = window.matchMedia("(prefers-color-scheme: dark)")

export const html = document.getElementById("html")

import { THEME_TOGGLE, global } from "../store/global"

if (clientTheme.matches) {
  html.className = "dark"
  global.dispatch(THEME_TOGGLE)
}