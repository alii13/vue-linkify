import { createApp } from 'vue'
import linkified from '../../dist/vue-linkify.min.js'

describe('vue-linkify', () => {
  it('should correctly linkify content', (done) => {
    const container = document.createElement('div')
    const app = createApp({
      data() {
        return { raw: 'Hello from vuejs.org' }
      },
      template: '<div v-html="raw" v-linkified />'
    })
    
    app.directive('linkified', linkified)
    const vm = app.mount(container)

    // Wait for next tick to ensure directive has executed
    setTimeout(() => {
      expect(container.innerHTML).to.include('Hello from <a href="http://vuejs.org" class="linkified" target="_blank">vuejs.org</a>')
      app.unmount()
      done()
    }, 10)
  })

  it('should correctly linkify content with options', (done) => {
    const container = document.createElement('div')
    const app = createApp({
      data() {
        return { raw: 'Hello from vuejs.org' }
      },
      template: '<div v-html="raw" v-linkified="{ className: \'foo\' }" />'
    })
    
    app.directive('linkified', linkified)
    const vm = app.mount(container)

    // Wait for next tick to ensure directive has executed
    setTimeout(() => {
      expect(container.innerHTML).to.include('Hello from <a href="http://vuejs.org" class="foo" target="_blank">vuejs.org</a>')
      app.unmount()
      done()
    }, 10)
  })
})
