import { css, html, LitElement, type PropertyDeclarations } from "lit";

export class ThemeToggle extends LitElement {

  static styles = css`
    .theme wa-button::part(label){
      display: flex;
      gap: var(--wa-space-s);
    }
  `;

  static properties ={
    _currentTheme: {type: String},
    _icon: {type: String, state: true},
    _themeName: {type: String, state: true}
  }

  // declare _currentTheme: any;
  declare _currentTheme: string;
  declare _icon: string;
  declare _themeName: string;
  #query = window.matchMedia('(prefers-color-scheme: dark)');

  constructor()
  {
    super();
    // localStorage.removeItem('theme'); 
    this._currentTheme = localStorage.getItem('theme') ?? 'light';
    this._applyTheme(this._currentTheme);
  }
  
  connectedCallback() {
    super.connectedCallback();
      console.log("listenniing....");
      this.#query.addEventListener('change', this._handleSystemChange);
  }

  disconnectedCallback() {
    // Stop listening only if the Nav is removed/reset
    // just making sure we clean up this when we swtich from main web to mobile web.
    this.#query.removeEventListener('change', this._handleSystemChange);
    super.disconnectedCallback();
  }
  
  
  render(){
    return html`
      <wa-dropdown class="theme" @wa-select=${this._themeSelector}>
        <wa-button slot="trigger" with-caret size="small" appearance="plain" >
          <wa-icon name=${this._icon} ></wa-icon> 
          <span>${this._themeName}</span>
        </wa-button>
        <wa-dropdown-item type="checkbox" value="light" >Light
          <wa-icon slot="icon" name="sun" variant="regular"></wa-icon>
        </wa-dropdown-item>
        <wa-dropdown-item type="checkbox" value="dark">Dark
          <wa-icon slot="icon" name="moon" variant="regular"></wa-icon>
        </wa-dropdown-item>
        <wa-divider></wa-divider>
        <wa-dropdown-item type="checkbox" value="system">System
          <wa-icon slot="icon" name="circle-half-stroke"></wa-icon>
        </wa-dropdown-item>
      </wa-dropdown>
    `;
  }

  _setIcon(theme: string) {
    const icons = {dark: "moon", light: "sun", system: "circle-half-stroke"}
    this._icon = icons[theme as keyof typeof icons];
  }
  _setName(theme: string) {
    const icons = {dark: "Dark", light: "Light", system: "System"}
    this._themeName = icons[theme as keyof typeof icons];
  }

  _handleSystemChange = () => {
    if(this._currentTheme === "system"){
        this._applyTheme("system")
      }
  }

  _themeSelector = (e: any) =>{
    localStorage.setItem('theme', e.detail.item.value);
    console.log("_themeselector "+localStorage.getItem("theme"))
    console.log("_themeselector e.detail "+e.detail.item.value)
    this._applyTheme(e.detail.item.value);
  }

  _applyTheme = (theme: string) => {
    this._setIcon(theme);
    this._setName(theme);
    let isDarkMode: boolean = theme === "dark" ? true : false;

    if (theme==="system"){
      console.log("system sya pumasok dito");
      isDarkMode = this.#query.matches? true : false;
      console.log("apply theme system "+ theme);
      console.log("apply theme system is Darkmode"+ isDarkMode);
    }
    document.documentElement.classList.toggle("wa-dark", isDarkMode);
  }
}

customElements.define('theme-toggle', ThemeToggle);