// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: {
                lang: 'fa',
                dir: 'rtl'
            }
        }
    },
    modules: ['@nuxt/image-edge', '@nuxtjs/tailwindcss'],

    image: {
        // dir: 'assets/images',
        // domains: ['http://127.0.0.1:8000/']
        domains: ['https://api.saeedaminy.ir/']

    },
    nitro: {
        compressPublicAssets: true,
    },





})
