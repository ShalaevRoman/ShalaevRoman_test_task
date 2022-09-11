import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify, {})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ffffff',
        secondary: '#000000',
        accent: '#02884c',
        error: '#b71c1c'
      }
    }
  }
})
