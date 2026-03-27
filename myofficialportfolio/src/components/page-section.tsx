import { css, html, LitElement, type PropertyDeclarations } from "lit";

export class PageSection extends LitElement {

  static styles = css`

    section[part="base"]{
      margin-top: var(--wa-space-4xl);
    }

    .context-container {
      font-family: var(--font-family);
      font-size: var(--wa-font-size-m);
      color: var(--wa-color-text-quiet);
      display: flex;
      align-items: center;
      gap: 12px;
    }
      
    .context-container wa-divider {
      --width: 2px;
      --spacing: 0;
      width: 24px;
    }

    h1 {
      font-family: var(--font-family);
      margin: 0;
      margin-top: var(--wa-space-2xs);
    }
    p {
      margin-block-end: 0;
      color: var(--wa-color-text-quiet);
      font-weight: var(--wa-font-weight-light);
    }
      
  `;



  constructor() {
    super();


  }

  render() {
    return html`
      <section part="base">
        <div class="context-container font-title">
          <wa-divider></wa-divider>
          <slot name="context"></slot>
        </div>
        <h1 class="title-container font-title">
          <slot name="title"></slot>
        </h1>
        <p class="subtitle-container">
            <slot name="subtitle"></slot>
        </p>
        <div>
          <slot name="body"></slot>
        </div>
      </section>
    `;
  }


}

customElements.define('page-section', PageSection);