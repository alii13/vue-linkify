import linkify from 'linkify-html'

const linkifiedDirective = {
  mounted(el, binding) {
    el.innerHTML = linkify(el.innerHTML, binding.value)
  },
  updated(el, binding) {
    el.innerHTML = linkify(el.innerHTML, binding.value)
  },
  // Vue 2 compatibility
  bind(el, binding) {
    el.innerHTML = linkify(el.innerHTML, binding.value)
  },
  update(el, binding) {
    el.innerHTML = linkify(el.innerHTML, binding.value)
  }
}

// Browser global export
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.directive('linkified', linkifiedDirective)
}

export default linkifiedDirective
