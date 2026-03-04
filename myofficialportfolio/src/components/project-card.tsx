import { LitElement, html } from "lit";

export class MpCard extends LitElement {
    
    render(){
        return html/*html*/`
        <div class="card-container">
            <div class="thumbnail-container"></div>
            <div class="details">
                <div class="project-details">Title</div>
                <div class="project-tags></div>
            </div>
        </div>`;
    }
}

customElements.define('mp-card', MpCard)