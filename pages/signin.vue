<template>
    <div id="pageSignin" tabindex="-1">
      <Form @submit="handleLogin" :validation-schema="schema" v-slot="{ errors }">
        <div class="modal-dialog modal-dialog-centered">      
          <div class="modal-content">
            <button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"><IconsXMark /></button>
            
            <div class="modalContainer">
              <div class="modalTitleContainer">
                <h3 class="modalTitle" id="modalSigninLabel">Sign In</h3>
              </div>
              <div class="msgError">{{ message }}</div>
              <label for="modalSigninForm-username">Enter your email</label>
              <Field name="email" type="email" id="modalSigninForm-username" :class="{ 'is-invalid': errors.email }" class="form-control form-control-sm rounded" placeholder="email" />
              <div class="msgError">{{errors.email}}</div>
              <label for="modalSigninForm-password">Enter your password</label>
              <Field name="password" type="password" id="modalSigninForm-password" :class="{ 'is-invalid': errors.email }" class="form-control form-control-sm rounded" placeholder="password" />
              <div class="msgError">{{errors.password}}</div>
              <div class="d-flex">
                <a href="#" data-bs-target="#modalForgot" data-bs-toggle="modal" class="ms-auto my-1">Forgot Password?</a>
              </div>
      
              <div class="d-grid">
                <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Sign In </button>
              </div>
      
              <a href="#modalSignup" data-bs-target="#modalSignup" data-bs-toggle="modal">Not yet a member? Sign up</a>
              <div class="my-3"><strong>or</strong></div>
              
              <div class="d-grid">
                <button type="button" class="socialBtn"><div><img src="/images/facebook-logo.png" width="30" height="30" class="me-3">Continue with Facebook</div></button>
                <button type="button" class="socialBtn"><div><img src="/images/google-logo.png" width="27" height="27" class="me-3">Continue with Google</div></button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  //import { Modal } from 'bootstrap'
  import { Form, Field } from 'vee-validate';
  import * as Yup from 'yup';
  
  const { $bootstrap } = useNuxtApp()
  const auth = useAuthStore();
  const message = ref("");
  
  const schema = Yup.object().shape({
      email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
      password: Yup.string()
          .min(8, 'Password must be at least 8 characters')
          .required('Password is required'),
  });
  const signinModal = ref(null);
  
  //$bootstrap.Modal = Modal;
  onMounted(() => {
    signinModal.value = new $bootstrap.Modal('#modalSignin');
  });
  
  
  
  const handleLogin = async (values) => {
  //async function handleLogin() {
  
  
    if (auth.isLoggedIn) {
      return navigateTo("/");
    }
  
    const { data, error } = await auth.signin(values);
    
    if (!error.value) {
      console.log('login successful')
      signinModal.hide();
      navigateTo("/");
    } else {
      message.value = error.value.data.message;
    }
  }
  </script>