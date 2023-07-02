import { LitElement, html } from "lit";
import globalStyles from "../styles/default.css" assert { type: 'css' }
import styles from "../styles/gr-loader.css" assert { type: 'css' }

export class GrLoader extends LitElement {

  static styles = [globalStyles, styles]

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
    return [
      `border-width: ${this.thickness ?? 3}px;`,
      `height: ${this.size ?? 20}px;`,
      `width: ${this.size ?? 20}px;`,
      `border-color: ${this.color + '4D' ?? '#fff'};`,
      `border-top-color: ${this.color ?? '#fff'};`
    ].join(' ')
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