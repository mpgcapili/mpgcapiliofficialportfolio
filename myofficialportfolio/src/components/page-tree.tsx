import { css, html, LitElement, type PropertyDeclarations } from "lit";

export class PageTree extends LitElement {
  static styles = css`
    section[part="base"] {
      container-type: inline-size;
      /* width:400px; */
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <section part="base">
        <h4>Title</h4>
      </section>
    `;
  }
}

customElements.define("page-tree", PageTree);
