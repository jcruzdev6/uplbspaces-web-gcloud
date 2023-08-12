<template>
    <div class="offcanvas offcanvas-start d-lg-none" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasSignup">
        <button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close"><IconsXMark /></button>
        <div class="offcanvas-header">
            <h3 class="offcanvasTitle">Sign Up</h3>
        </div>
        <div class="offcanvas-body">
            <div class="offcanvasContainer">
                <label for="offcanvasSignupForm-username">Enter username</label>
                <input type="text" id="offcanvasSignupForm-username" class="form-control form-control-sm rounded"
                    placeholder="username">

                <label for="offcanvasSignupForm-password">Enter password</label>
                <input type="password" id="offcanvasSignupForm-password" class="form-control form-control-sm rounded"
                    placeholder="password">

                <label for="offcanvasSignupForm-password2">Re-enter password</label>
                <input type="password" id="offcanvasSignupForm-password2" class="form-control form-control-sm rounded"
                    placeholder="password2">

                <div class="d-flex" style="align-items: center;">
                    <input class="form-check-input me-1" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Agree to <a href="terms.html">Terms &amp;
                            Conditions</a></label>
                </div>

                <div class="d-grid">
                    <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Sign Up </button>
                </div>

                <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSignin"
                    aria-controls="offcanvasSignin">Already a member? Sign In</a>
                <div class="my-5"><strong>or</strong></div>

                <div class="d-grid">
                    <button type="button" class="socialBtn">
                        <div><img src="/images/facebook-logo.png" width="30" height="30" class="me-3">Continue with Facebook</div>
                    </button>
                    <button type="button" class="socialBtn">
                        <div><img src="/images/google-logo.png" width="27" height="27" class="me-3">Continue with Google</div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>