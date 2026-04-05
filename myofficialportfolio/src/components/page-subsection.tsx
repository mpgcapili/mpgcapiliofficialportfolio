import { css, html, LitElement, type PropertyDeclarations } from "lit";

export class PageSubSection extends LitElement {

  static styles = css`
    section{
      margin: var(--wa-space-xs) 0;
    }
    h4,
    p{
      margin: 0;
    }

    p{
      margin-top: var(--wa-space-xs);
      font-weight: var(--wa-font-weight-light);
      color: var(--wa-color-text-quiet);
    }
    div{
      margin-block-start: var(--wa-space-m);
      margin-block-end: var(--wa-space-xl);
    }
  `;



  constructor() {
    super();
  }

  render() {
    return html`
      <section part="base">
        <h4>
          <slot name="title"></slot>
        </h4>
        <p>
          <slot name="subtitle"></slot>
        </p>
        <div>
          <slot name="body"></slot>
        </div>
      </section>
    `;
  }


}

customElements.define('page-subsection', PageSubSection);