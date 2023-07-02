import { LitElement, html } from "lit";
import globalStyles from "../styles/default.css" assert { type: 'css' }
import styles from "../styles/gr-button.css" assert { type: 'css' }
import { modifiersToBem } from "../utils/utils";

export class GrButton extends LitElement {

  static styles = [globalStyles, styles]

  static properties = {
    /**
     * Texto a mostrar en el botón
     */
    label: { type: String },

    /**
     * Estilo del contenedor. Posibles: boxed (por defecto), outline, negative, inline
     */
    type: { type: String },

    /**
     * Tamaño del botón. Posibles: large, medium (por defecto), small
     */
    size: { type: String },
    
    /** 
     * Color del contenedor en base a las variables CSS. Posibles: primary (por defecto), secondary, tertiary
     */
    priority: { type: String },
    
    /**
     * Estado del botón. Posibles: loading, disabled
     */
    status: { type: String }
  }

  constructor() {
    super()
    this.type = 'boxed'
    this.size = 'medium'
    this.priority = 'primary'
  }

  getClassName() {
    return modifiersToBem('button', [
      this.type,
      this.size,
      this.priority,
      this.status
    ])
  }

  setContentButton() {
    if(this.status == 'loading') {
      return html`<gr-loader color="#fff"></gr-loader>`
    } else {
      return html`<span class="gr-button__label">${this.label}</span>`
    }
  }

  render() {
    return html`
      <button
        class="${this.getClassName()}">
        <span class="gr-button__background"></span>
        ${this.setContentButton()}
      </button>`
  }
  
}

customElements.define('gr-button', GrButton)