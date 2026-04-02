import { css, html, LitElement, type PropertyDeclarations } from "lit";

export class ThemeToggle extends LitElement {

  static styles = css`
    .theme wa-button::part(label){
      display: flex;
      gap: var(--wa-space-s);
    }
  `;

  static properties = {
    _currentTheme: { type: String, state: true },
    _icon: { type: String, state: true },
    _themeName: { type: String, state: true },
    _isChecked: { type: Boolean }
  }

  // declare _currentTheme: any;
  declare _currentTheme: string;
  declare _icon: string;
  declare _themeName: string;
  declare _isChecked: boolean;
  #query = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    super();
    // localStorage.removeItem('theme');
    this._currentTheme = localStorage.getItem('theme') ?? 'dark';
    this._applyTheme(this._currentTheme);
  }

  connectedCallback() {
    super.connectedCallback();
    this.#query.addEventListener('change', this._handleSystemChange);
  }

  disconnectedCallback() {
    // Stop listening only if the Nav is removed/reset
    // just making sure we clean up this when we swtich from main web to mobile web.
    this.#query.removeEventListener('change', this._handleSystemChange);
    super.disconnectedCallback();
  }


  render() {
    return html`
      <wa-dropdown class="theme" @wa-select=${this._themeSelector}>
        <wa-button exportparts="base: btn-base" slot="trigger" size="small" appearance="plain" pill>
          <wa-icon part="icon" name=${this._icon}></wa-icon> 
        </wa-button>
        <wa-dropdown-item type="checkbox" value="light" ?checked=${this._currentTheme === "light"}>Light
          <wa-icon slot="icon" name="sun" variant="regular"></wa-icon>
        </wa-dropdown-item>
        <wa-dropdown-item type="checkbox" value="dark" ?checked=${this._currentTheme === "dark"}>Dark
          <wa-icon slot="icon" name="moon" variant="regular"></wa-icon>
        </wa-dropdown-item>
        <wa-divider></wa-divider>
        <wa-dropdown-item type="checkbox" value="system" ?checked=${this._currentTheme === "system"}>System
          <wa-icon slot="icon" name="circle-half-stroke"></wa-icon>
        </wa-dropdown-item>
      </wa-dropdown>
    `;
  }

  _setChecked(theme: string) {
    const currTheme = localStorage.getItem("theme");
    this._isChecked = theme === currTheme;
  }

  _setIcon(theme: string) {
    const icons = { dark: "moon", light: "sun", system: "circle-half-stroke" }
    this._icon = icons[theme as keyof typeof icons];
  }

  _handleSystemChange = () => {
    const currTheme = localStorage.getItem("theme") ?? "light";
    if (currTheme === "system") {
      this._applyTheme("system")
    }
  }

  _themeSelector = (e: any) => {
    const itemValue = e.detail.item.value;
    const lightdark = ['light', 'dark'];
    this._setChecked(itemValue);

    localStorage.setItem('theme', itemValue);
    this._currentTheme = itemValue;
    const currTheme = localStorage.getItem("theme") ?? "light";
    if (lightdark.includes(currTheme)) {
      this.#query.removeEventListener('change', this._handleSystemChange);
    }
    this._applyTheme(itemValue);
  }

  _applyTheme = (theme: string) => {
    this._setIcon(theme);
    this._setChecked(theme);
    let isDarkMode: boolean = theme === "dark" ? true : false;
    // localStorage.setItem("theme", theme);
    if (theme === "system") {
      this.#query.addEventListener('change', this._handleSystemChange);
      isDarkMode = this.#query.matches ? true : false;
    }
    document.documentElement.classList.toggle("wa-dark", isDarkMode);

  }
}

customElements.define('theme-toggle', ThemeToggle);