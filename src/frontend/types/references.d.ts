import Vue, { ComponentOptions } from 'vue'

declare module '@nuxt/types/app/index.d.ts' {
  interface Context {
    store: any
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $axios: NuxtAxiosInstance
  }
}
