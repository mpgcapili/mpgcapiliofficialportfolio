import { LitElement, css, html } from "lit";

export class ProjectCard extends LitElement {
    
    static styles = css`
        .card-container{
            border-style: dotted;
            border-color: red;
            height: 487px;
            display: flex;
            gap: 16px;
            padding: 24px 24px;
        }

        .thumbnail-container{
            width: 100%;
            height: 100%;
            background-color: #F12666;
        }
    `;

    static properties = {
        projTitle: {type: String},
        subtitle: {type: String},
        desc:  {type: String},
        tags: {type: Array},
        image: {type: String},
    }

    // declare is telling TS below variables are being reference in somewhere.
    declare projTitle: string;
    declare subtitle: string;
    declare desc: string;
    declare tags: [];
    declare image: string;

    constructor(){
        super();
        this.projTitle = "Loading..";
        this.subtitle = "subtitle";
        this.desc = "description";
        this.image = "";     // Initialize to avoid 'undefined'
        this.tags = [];      // Initialize as empty arra
    }

    render(){
        return html/*html*/`
        <div class="card-container">
            <div class="thumbnail-container">f</div>
            <div class="details">
                <div class="project-details">${this.projTitle}</div>
                <div class="subtitle">${this.subtitle}</div>
                <div class="desc">${this.desc}</div>
                <div class="project-tags">
                    <wa-badge>Badge sdf1</wa-badge>
                    <wa-badge>BadgeASDFASDFSA sdf1</wa-badge>
                    <wa-badge>BadgeASDFASDFSA sdf1</wa-badge>
                </div>
            </div>
        </div>`;
    }
}
customElements.define('project-card', ProjectCard);