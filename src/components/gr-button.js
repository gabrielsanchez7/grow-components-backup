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

  host
  hasIcon

  constructor() {
    super()
    this.type = 'boxed'
    this.size = 'medium'
    this.priority = 'primary'
  }

  firstUpdated() {
    this.host = this.renderRoot.querySelector('.gr-button')
  }
  
  shouldUpdate(changed) {
    if(changed.has('status')) { this.handleLoading() }
    return true
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
      return html`<gr-loader color="#ffffff"></gr-loader>`
    } else {
      return html`
        <slot name="leading-icon" class="gr-button__leading-icon"></slot>
        <span class="gr-button__label">${this.label}</span>
        <slot name="trailing-icon" class="gr-button__trailing-icon"></slot>
      `
    }
  }

  handleLoading() {
    if(this.status == 'loading') {
      const sizes = this.host.getBoundingClientRect()
      const width = sizes.width.toFixed(2)
      this.host.style.width = `${width}px`
    } else {
      this.host?.style.removeProperty('width')
    }
  }
  
  handleClick() {
    
  }

  render() {
    return html`
      <button @click=${this.handleClick} class="${this.getClassName()}">
          <span class="gr-button__background"></span>
          ${this.setContentButton()}
      </button>`
  }
  
}

customElements.define('gr-button', GrButton)