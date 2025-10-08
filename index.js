/*global define*/
import linkify from 'linkifyjs/html'

(function () {
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

  if (typeof exports === 'object') {
    module.exports = linkifiedDirective
  } else if (typeof define === 'function' && define.amd) {
    define([], function () { return linkifiedDirective })
  } else if (window.Vue) {
    window.Vue.directive('linkified', linkifiedDirective)
  }
})()
