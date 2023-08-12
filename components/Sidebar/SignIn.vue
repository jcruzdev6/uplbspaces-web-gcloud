<template>
    <div class="offcanvas offcanvas-start d-lg-none" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasSignin">
        <div class="offcanvas-header">
            <h3 class="offcanvasTitle">Sign In</h3>
        </div>
        <div class="offcanvas-body">
            <div class="offcanvasContainer">
                <label for="offcanvasSigninForm-username">Enter your username</label>
                <input type="text" id="offcanvasSigninForm-username" class="form-control form-control-sm rounded"
                    placeholder="username">

                <label for="offcanvasSigninForm-password">Enter your password</label>
                <input type="password" id="offcanvasSigninForm-password" class="form-control form-control-sm rounded"
                    placeholder="password">

                <div class="d-flex">
                    <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasForgot" class="ms-auto my-1">Forgot
                        Password?</a>
                </div>

                <div class="d-grid">
                    <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Sign In </button>
                </div>

                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSignup" aria-controls="offcanvasSignup">Not
                    yet a member? Sign up</a>
                <div class="my-5"><strong>or</strong></div>

                <div class="d-grid">
                    <button type="button" class="socialBtn">
                        <div><img src="/images/facebook-logo.png" width="30" height="30" class="me-3">Continue with Facebook
                        </div>
                </button>
                <button type="button" class="socialBtn">
                    <div><img src="/images/google-logo.png" width="27" height="27" class="me-3">Continue with Google
                    </div>
                </button>
            </div>

        </div>
    </div>
</div></template>