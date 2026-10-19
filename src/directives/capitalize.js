import { capitalize } from 'string-filters'

export default {
  updated: function (el, binding) {
    if (el.value.length) {
      const lower = binding.modifiers?.lower || binding.value?.lower
      el.value = capitalize(el.value, lower)
    }
  }
}