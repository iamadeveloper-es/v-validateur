import { defineNuxtModule, createResolver, addImportsDir } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'v-validateur',
    configKey: 'vValidateur'
  },

  setup (options) {
    createResolver(import.meta.url);

    addImportsDir('./src/runtime/composables');

    // eslint-disable-next-line no-console
    console.log('✅ Módulo v-validateur cargado!', options);
  }
});
