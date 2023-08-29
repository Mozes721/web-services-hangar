import GoogleSignInPlugin from 'vue3-google-signin';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  nuxtApp.vueApp.use(GoogleSignInPlugin, {
      load: {
        client_id: config.GOOGLE_LOGIN_AUTH_API_KEY,
      },
    }
  );
});
