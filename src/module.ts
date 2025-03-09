import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'v-validateur',
    configKey: 'vValidateur'
  },

  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Registrar automáticamente todos los composables del módulo
    // addImportsDir(resolver.resolve('runtime/composables'))
    addImportsDir('./src/runtime/composables')

    console.log('✅ Módulo v-validateur cargado!', options)
  }
})
