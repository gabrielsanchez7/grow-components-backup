import { LitElement } from "lit";
import globalStyles from "../styles/default.css" assert { type: 'css' }

export class GrLoader extends LitElement {

  static styles = [globalStyles]

  static properties = {
    /**
     * Grosor del loader
     */
    thickness: { type: Number },
    
    /**
     * Radio del loader
     */
    size: { type: Number },

    /**
     * Color del loader
     */
    color: { type: String }
  }
  
  customizeStyle() {
    return {
      borderWidth: `${this.thickness}px`,
      height: `${this.size}px`,
      width: `${this.size}px`
    }
  }

  render() {
    return html`
      <div class="gr-loader">
        <div class="gr-loader__indicator" style="${this.customizeStyle()}"></div>
      </div>
    `
  }
  
}

customElements.define('gr-loader', GrLoader)