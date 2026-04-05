import { css, html, LitElement } from "lit";

export class CompareImg extends LitElement {

  static styles = css`
      div[part="base"]{
        container-type: inline-size;
        max-width: 1280px;
        aspect-ratio: 16 / 9;
        border-radius: var(--wa-border-radius-l);
        /* border: solid 2px var(--wa-color-surface-border); */
        position: relative;
        margin: var(--wa-space-xs) 0;
        --before-badge: 1;
        --after-badge: 1;
        --percent: 50%;
      }


      div[part="base"] div:not([class="resize-button"]){
        position: absolute;
        /* width: 100%; */
        border-radius: var(--wa-border-radius-l) 0 0 var(--wa-border-radius-l);
        top: 0;

      }

      ::slotted(img){
        border-radius: var(--wa-border-radius-l);
        width: 100cqw;
      }        

      input[type="range"]{
        position: absolute;
        top: 25%;
        height: 50%;
        margin: auto;
        width: 100%;
        z-index: 4;
        cursor: col-resize;
        opacity: 0;
      }
        
      .resize-button{
        position: absolute;
        top: calc(50% - 20px);
        display: flex;
        align-items: center;
        left: calc(var(--percent) - 10px);
        border-radius: var(--wa-border-radius-m);
        width: 24px;
        height: 40px;
        index: 3;
        background-color: var(--wa-color-brand-50);
      }

      wa-icon{
        margin:auto;
        font-size: var(--wa-font-size-l)
      }
      div[class="before"]{
        width: var(--percent);
        height: 100%;
        border-right: 4px solid var(--wa-color-brand-50);
        overflow: hidden;
      }

      wa-badge{
        position: absolute;
        opacity: var(--percent);
        transition: opacity .3s ease;

        &.badge1{
          opacity: var(--before-badge);
          inset: 16px  auto auto 16px;
        }
        &.badge2{
          opacity: var(--after-badge);
          inset: 16px 16px auto auto ;
        }

        
      }   
      p[class="disclaimer"]{
        color: var(--wa-color-text-quiet);
        font-size: var(--wa-font-size-s);
        text-align: center;
      } 
  `;


  declare label1: string;
  declare label2: string;
  declare imglabel: string;
  declare comparable: boolean;
  static properties = {
    resizable: { type: Boolean },
    label1: { type: String },
    label2: { type: String },
    imglabel: { type: String },
  }

  constructor() {
    super();
    this.label1 = "";
    this.label2 = "";
    this.imglabel = "";
    this.comparable = false;
  }
  _onInput(e: any) {

    const value = e.target.value;
    // locate part base
    const base: any = this.shadowRoot?.querySelector('[part="base"]');
    // then adjust the css variable --percent
    base.style.setProperty('--percent', `${value}%`);

    // adjust the before and after label on which is currently being viewed at
    base.style.setProperty('--before-badge', `${value > 45 ? 1 : .2}`);
    base.style.setProperty('--after-badge', `${value < 45 ? 1 : .2}`);

  }
  render() {
    return html`
      <div part="base">
        ${this.comparable ?
        html`
          <div class="after">
            ${this.label2 && html`<wa-badge class="badge2" variant="neutral">${this.label2}</wa-badge>`}
            <slot name="after"></slot> 
          </div>
          
          <div class="before">
            ${this.label1 && html`<wa-badge class="badge1" variant="neutral" >${this.label1}</wa-badge>`}
            <slot name="before"></slot>
          </div>

          <div class="resize-button">
            <wa-icon name="grip-lines-vertical"></wa-icon>
          </div>
          <input 
            type="range" 
            min="2" 
            max="98" 
            value="50" 
            @input="${this._onInput}"
          /> `
        :

        html`
        ${this.imglabel && html`<wa-badge class="badge1" variant="neutral" >${this.imglabel}</wa-badge>`}
        <slot name = "img" ></slot >
        `
      }
      </div>
      <p class="disclaimer"><i>Best viewed in Desktop browers.</i></p>
    `;
  }


}

customElements.define('compare-img', CompareImg);