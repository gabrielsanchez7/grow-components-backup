/**
 * Convierte una lista de modificadores en un un String para configurar la clase del componente
 * @param {String} componentName - Nombre del componente al que se agregará la clase
 * @param {String[]} modifiersList - Lista de modificadores a convertir en clase
 * @returns Clase en formato BEM CSS a incluir en la propiedad class
 */
export function modifiersToBem(componentName, modifiersList = []) {
  if(modifiersList.length > 0) {
    const bemModifiers = []
    modifiersList.forEach(mod => {
      if(mod != null) { bemModifiers.push(`gr-${componentName}--${mod}`) }
    })
    
    return `gr-${componentName} ${bemModifiers.join(' ')}`
  } else {
    return `gr-${componentName}`
  }
}