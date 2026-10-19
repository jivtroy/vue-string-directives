export default {
  updated: function (el, binding) {
    if (el.value.length) {
      const options = binding.value || binding.modifiers
      el.value = (options?.first) ? el.value.charAt(0).toLowerCase() + el.value.slice(1) : el.value.toLowerCase()
    }
  }
}