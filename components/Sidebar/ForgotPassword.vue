<template>
    <div class="offcanvas offcanvas-start d-lg-none" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasForgot">
        <button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close"><IconsXMark /></button>
        <div class="offcanvas-header">
            <h3 class="offcanvasTitle">Forgot Password</h3>
        </div>
        <div class="offcanvas-body">
            <div class="offcanvasContainer">
                <label for="offcanvasForgotForm-email">Enter your email address</label>
                <input type="email" id="offcanvasForgotForm-email" class="form-control form-control-sm rounded"
                    placeholder="email">

                <div class="d-grid">
                    <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Submit</button>
                </div>

            </div>
        </div>
    </div>
</template>