import { css, html, LitElement, type PropertyDeclarations } from "lit";

export class PageTree extends LitElement {
  static styles = css`
    section[part="base"] {
      & div{
        display: flex;
      }
    }
    
    wa-divider{
      height: auto;
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: var(--wa-space-m);
      padding: 0;
      margin: 0;
      padding-left: var(--wa-space-m);
    }

    ::slotted(li){
      cursor: pointer;
    }
    @media (width < 1199px){
     ul{
      display: grid;
      grid-template-columns: 1fr 1fr;
     }
    }
    @media (width < 768px){
     ul{
      grid-template-columns: 1fr;
     }
    }
  `;

  static properties = {
    isMobile: { type: Boolean }
  }

  declare _ismobile;
  declare _handleMediaQuery;
  declare isMobile: any;

  constructor() {
    super();
    this._ismobile = window.matchMedia('(width<1199px)');
    this.isMobile = this._ismobile.matches;

    // STEP 2: Create the function that will run when the screen crosses 1200px
    this._handleMediaQuery = (e: any) => {
      this.isMobile = e.matches;
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._ismobile.addEventListener('change', this._handleMediaQuery);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._ismobile.removeEventListener('change', this._handleMediaQuery);
  }

  render() {
    const list = html`
    <ul class="list">
      <slot name="list"></slot>
    </ul>
  `;
    return html`
      <section part="base">
      ${this.isMobile ?
        html`<wa-details icon-placement="end" >
          <span slot="summary">On this page</span>
            ${list}
        </wa-details>`:
        html`
        <h4>Details</h4>
        <div>
          <wa-divider orientation="vertical"></wa-divider>
            ${list}
        </div>`
      }
      </section>
    `;
  }
}

customElements.define("page-tree", PageTree);
