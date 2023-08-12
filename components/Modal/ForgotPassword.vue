<template>
   <div class="modal fade" id="modalForgot" tabindex="-1" aria-labelledby="modalForgotLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"><IconsXMark /></button>
        
        <div class="modalContainer">
          <div class="modalTitleContainer">
            <h3 class="modalTitle" id="modalForgotLabel">Forgot Password</h3>
          </div>
          <label for="modalForgotForm-email">Enter your email address</label>
          <input type="email" id="modalForgotForm-email" class="form-control form-control-sm rounded" placeholder="email">
  
          <div class="d-grid">
            <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Submit</button>
          </div>
  
        </div>

      </div>
    </div>
  </div>
</template>