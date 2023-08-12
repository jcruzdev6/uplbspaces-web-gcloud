<template>
   <div class="modal fade" id="modalSignup" tabindex="-1" aria-labelledby="modalSignupLabel" aria-hidden="true">
    <Form @submit="handleRegister" :validation-schema="schema" v-slot="{ errors }">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"><IconsXMark /></button>
        <div class="modalContainer">
          <div class="modalTitleContainer">
            <h3 class="modalTitle" id="modalSignupLabel">Sign Up</h3>
          </div>
          <div class="msgError">{{ message }}</div>

          <label for="modalSignupForm-email">Enter email</label>
          <Field type="email" name="email" id="modalSignupForm-email" class="form-control form-control-sm rounded" placeholder="email" />
          <div class="msgError">{{errors.email}}</div>

          <label for="modalSignupForm-password">Enter password</label>
          <Field type="password" name="password" id="modalSignupForm-password" class="form-control form-control-sm rounded" placeholder="password" />
          <div class="msgError">{{errors.password}}</div>

          <label for="modalSignupForm-password2">Re-enter password</label>
          <Field type="password" name="password_confirmation" id="modalSignupForm-password2" class="form-control form-control-sm rounded" placeholder="confirm password" />
          <div class="msgError">{{errors.password_confirmation}}</div>
  
          <div class="d-flex" style="align-items: center;">
            <input class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">Agree to <a href="terms.html">Terms &amp; Conditions</a></label>
          </div>
  
          <div class="d-grid">
            <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Sign Up </button>
          </div>
  
          <a href="#modalSignin" data-bs-target="#modalSignin" data-bs-toggle="modal">Already a member? Sign In</a>
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

import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

//const { $bootstrap } = useNuxtApp()
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


const handleRegister = async (values) => {
  const { data, error } = await auth.register(form.value);
  if (!error.value) {
    console.log('login successful')
    navigateTo("/");
  } else {
    message.value = error.value.data.message;
  }
}

</script>

