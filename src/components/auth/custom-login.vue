<template>
  <div class="justify-content-center form-group">
    <div class="p-1 text-white input-group">
      <label for="Username" class="text-gray">Username</label>
      <div class="input-group-addon desktop-button-input border border-white">
        <i class="bi bi-person"></i>
        <input
          type="username"
          class="desktop-button-input text-white border-0"
          aria-describedby="username"
          placeholder="Type username"
          v-model="username"
        />
      </div>
    </div>
  </div>
  <div class="justify-content-center form-group">
    <div class="p-1 text-white input-group">
      <label for="Password" class="text-gray">Password</label>
      <div class="input-group-addon desktop-button-input border border-white">
        <i class="bi bi-lock text-dark"></i>
        <input v-if="showPassword"
          type="text"
          class="desktop-button-input text-white"
          placeholder="Type your password"
          v-model="password"
        /><input v-else
          type="password"
          class="desktop-button-input text-white border-0"
          placeholder="Type your password"
          v-model="password"
        />
        <button type="button" class="btn btn-link m-0 p-0" @click="toggleShow">
          <i class="eye-color" :class="{ 'bi bi-eye-slash': showPassword, 'bi bi-eye': !showPassword }"></i>
        </button>
      </div>
    </div>
  </div>
  <div class="p-1 d-flex justify-content-end">
    <a
      href="#"
      class="font-weight-bold text-decoration-underline text-white p-1 mr-1"
    >FORGOT PASSWORD?</a>
  </div>
  <div class="justify-content-center p-1 text-center">
    <button type="submit" class="btn login-button">Login</button>
  </div>
</template>

<script>
import "bootstrap-icons/font/bootstrap-icons.css";

export default {
  data() {
    return {
      showPassword: false,
      password: null 
    };
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<style>
.login-button {
  background-color: #FF5E45;
  width: 95%;
  display: block;
  margin: 0 auto;
  align-items: center; 
  justify-content: center; 
}

.login-button:hover,
.login-button:active {
  background-color: #FF5E45;
}

.btn-link {
  margin: 0;
  padding: 0;
}

.eye-color {
  color: #FF5E45;  
  vertical-align: middle;
}
</style>