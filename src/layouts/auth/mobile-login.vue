<template>
    <div class="bg-color">
      <img
        class="mb-2"
        src="~/assets/icons/login/arrow-icon.svg"
        alt="Mobile Login Arrow Menu"
      />
      <p class="text-white text-left welcome-login-text fw-normal fs-5 pt-1">Welcome back</p>
      <main class="justify-content-center pt-1">
        <div class="m-3">
          <div class="justify-content-center">
            <GoogleLogin :is-desktop="false" />
            <!-- Add error msg -->
          </div>
        </div>
        <div class="divider-container">
          <div class="divider-line"></div>
          <div class="divider-text">OR</div>
          <div class="divider-line"></div>
        </div>
        <CustomLogin :is-desktop="false" />
        <h6 class="poppins-style text-white pt-2 pb-5 mb-5">
          Don’t have an account?
          <a href="#" class="font-weight-bold text-decoration-underline">Sign up for FREE</a>
        </h6>
      </main>
    </div>
  </template>
  
  <script>
  import GoogleLogin from '@/components/auth/google-login-button.vue';
  import CustomLogin from '@/components/auth/custom-login.vue';
  
  export default {
    components: {
      GoogleLogin,
      CustomLogin
    }
  }
  </script>
  
