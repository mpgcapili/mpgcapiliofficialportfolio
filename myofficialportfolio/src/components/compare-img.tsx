import { css, html, LitElement, type PropertyDeclarations } from "lit";

export class CompareImg extends LitElement {

  static styles = css`
      div[part="base"]{
        /* width: 100%; */
        height: 600px;
        border: solid 2px #919191;
      }
  `;

  static properties = {
    _currentTheme: { type: String, state: true },
    _icon: { type: String, state: true },
    _themeName: { type: String, state: true },
    _isChecked: { type: Boolean }
  }

  constructor() {
    super();


  }

  render() {
    return html`
      <div part="base">
        <div>
            <slot name="before"></slot>
        </div>
        <div>
            <slot name="after"></slot>
        </div>

      </div>
      
    `;
  }


}

customElements.define('compare-img', CompareImg);