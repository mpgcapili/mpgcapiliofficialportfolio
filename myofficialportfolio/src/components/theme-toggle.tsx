import { css, html, LitElement, type PropertyDeclarations } from "lit";

export class ThemeToggle extends LitElement {

  static styles = css`
    .theme wa-button::part(label){
      display: flex;
      gap: var(--wa-space-s);
    }
  `;

  static properties ={
    _theme: {type: String}
  }

  declare _theme: any;

  constructor()
  {
    super();
    this._theme = localStorage.getItem('theme') ?? 'light';
    localStorage.setItem('theme', this._theme);
    this._applyTheme(this._theme);
  }
  
  #query = window.matchMedia('(prefers-color-scheme: dark)');
  connectedCallback() {
    super.connectedCallback();
    
    this.#query.addEventListener('change', (e) => {
      if(this._theme === "system"){
        console.log("under connected allback." + this._theme);
        this._applyTheme("system")
      }
    })
  }

  render(){
    return html`
      <wa-dropdown class="theme" @wa-select=${this._themeSelector}>
        <wa-button slot="trigger" with-caret size="small" appearance="plain" >
          <wa-icon name="sun" variant="regular"></wa-icon> 
          <span>Light</span>
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

  _themeSelector = (e: any) =>{
    localStorage.setItem('theme', e.detail.item.value);
    this._applyTheme(e.detail.item.value);
  }

  _applyTheme = (theme: string) => {
    if (theme==="system"){
      console.log("system sya pumasok dito");
      theme = this.#query.matches? "dark" :"light";
      console.log("apply theme system "+ theme);
    }
    document.documentElement.setAttribute('class', theme === "light" ? "wa-light":"wa-dark");
  }


}

customElements.define('theme-toggle', ThemeToggle);