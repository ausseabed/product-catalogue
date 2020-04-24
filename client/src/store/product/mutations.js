export function updateSavedData (state, selectedProduct) {
  state.selectedProduct = selectedProduct
}
export function updateProduct (state, elementValuePair) {
  state.selectedProduct[elementValuePair.element] = elementValuePair.value
}
export function addEmptyRow (state) {
  for (var key in state.selectedProduct) {
    state.selectedProduct[key] = ''
  }
  state.selectedProduct.unsaved_row = true
}
