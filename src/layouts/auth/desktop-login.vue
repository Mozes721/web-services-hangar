<template>
    <div class="desktop-bg row row-no-gutters mb-4">
        <section class="col-sm-4">
            <img
                class="d-flex justify-content-top align-items-start desktop-login-menu-svg"
                src="~/assets/icons/login/arrow-icon.svg"
                alt="Desktop Login Arrow Menu"
            />
            <p class="text-white text-center welcome-login-text fw-normal fs-3 lh-base">Welcome back to Hangar</p>
            <main class="d-grid justify-content-center">
                <div class="button-spacing p-3">
                    <div class="d-flex">
                        <GoogleLogin :is-desktop="true" />
                        <!-- Add error msg -->
                    </div>
                </div>
                <div class="divider-container">
                    <div class="divider-line"></div>
                    <div class="divider-text">OR</div>
                    <div class="divider-line"></div>
                </div>
                <CustomLogin />
                <div class="h-25 py-40 px-0 mb-10">
                    <h5 class="poppins-style text-white p-3">
                        Don’t have an account?
                        <a href="#" class="font-weight-bold text-decoration-underline">Sign up for FREE</a>
                    </h5>
                </div>
            </main>
        </section>
        <section class="col-sm-8">
            <div class="d-flex justify-content-end">
                <img
                    class="login-background-svg"
                    src="~/assets/icons/login/desktop-login-background.svg"
                    alt="Login Arrow Background"
                    loading="lazy"
                />
            </div>
        </section>
    </div>
</template>

<script>
import GoogleLogin from '@/components/auth/google-login-button.vue';
import CustomLogin from '@/components/auth/custom-login.vue';

export default {
    components: {
        GoogleLogin,
        CustomLogin
    },
}

</script>

<style>
html, body, div #__nuxt, #__layout {
    height: 100%!important;
    width: 100%!important;
    overflow: hidden;
}

.custom-input-field {
    width: 80%;
    height: 80%;
    padding: 8px 0px 8px 0px; /* Adjusted padding */
    border-radius: 25px;
    display: flex;
    gap: 5px;
}

.divider-container {
    display: flex;
    align-items: center;
}

.divider-line {
    flex-grow: 1;
    border-top: 1px solid #ccc;
}

.divider-text {
    margin: 0 10px;
    color: #999;
}

.not-having-account {
    height: 10%;
}

.poppins-style {
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0.1em;
    text-align: center;
}

.rubik-style {
    font-family: Rubik, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.1em;
    text-align: center;
}

</style>
