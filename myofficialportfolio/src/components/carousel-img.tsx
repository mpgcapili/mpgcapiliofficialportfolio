import { css, html, LitElement } from "lit";

export class CarouselImg extends LitElement {

  static styles = css`
      div[part="base"]{
        container-type: inline-size;
        max-width: 1280px;
        aspect-ratio: 16 / 9;
        border-radius: var(--wa-border-radius-l);
        /* border: solid 2px var(--wa-color-surface-border); */
        position: relative;
        margin: var(--wa-space-xs) 0;
      }

      wa-badge[class="badge"]{
        position: absolute;
        z-index: 2;
        inset: 16px  auto auto 16px;
      }
      img{
        border-radius: var(--wa-border-radius-l);
        width: 100cqw;
      }        

      wa-button:is(.back, .next)::part(base){
        /* height: 100%;
        background-color: transparent; */
        /* color: var(--wa-color-neutral-95); */
      }

      wa-button{
        height: 100%;
        position: absolute;
        display:flex;
        align-items: center;
        padding: 0 var(--wa-space-xs);
        &.back{
          left: 0;
        }
        &.next{
          right: 0;
        }

        &.back wa-icon,
        &.next wa-icon{
          font-size: var(--wa-font-size-2xl); 
        }
      }
      wa-progress-ring{
        position: absolute;
        top: var(--wa-space-m);
        right: var(--wa-space-m);
        --size: var(--wa-font-size-3xl);
      }
      p[class="disclaimer"]{
        color: var(--wa-color-text-quiet);
        font-size: var(--wa-font-size-s);
        text-align: center;
      } 
  `;

  declare imgs: string[];
  declare _index: number;
  declare badge: string;
  static properties = {
    imgs: { type: Array },
    _index: { type: Number, state: true },
    badge: { type: String }
  }

  constructor() {
    super();
    this.imgs = [];
    this._index = 0;
    this.badge = "";
  }

  _back = () => {
    this._index = this._index - 1 < 0 ? this.imgs.length - 1 : this._index - 1;
  }
  _next = () => {
    this._index = this._index + 1 >= this.imgs.length ? 0 : this._index + 1;
  }

  render() {
    return html`
      <div part="base">
        <wa-progress-ring value=${((this._index + 1) / this.imgs.length) * 100} ></wa-progress-ring>
        ${this.badge && html`<wa-badge variant="neutral" pill class="badge">${this.badge}</wa-badge>`}
        <wa-button class="back" @click=${this._back} pill>
          <wa-icon name="angle-left"></wa-icon>
        </wa-button>
        <wa-button class="next" @click=${this._next} pill>
          <wa-icon name="angle-right"></wa-icon>
        </wa-button>
       <img src=${this.imgs[this._index]}>
      </div>
       
    `;
  }

}

customElements.define('carousel-img', CarouselImg);