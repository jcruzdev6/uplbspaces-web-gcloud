<template>
    <div class="modal fade" id="modalProofOfPayment" tabindex="-1" aria-labelledby="modalProofOfPaymentLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <button type="button" class="toggleBtnDark ms-auto mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"><IconsXMark /></button>
        
        <div class="modalContainer">
          <div class="modalTitleContainer">
            <h3 class="modalTitle" id="modalProofOfPaymentLabel">Proof of Payment</h3>
          </div>
          <label for="modalProofOfPaymentForm-file">Upload proof of payment</label>
          <input type="file" id="modalProofOfPaymentForm-file" class="form-control form-control-sm rounded" placeholder="file">
  
          <div class="d-grid">
            <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Upload</button>
          </div>
  
        </div>

      </div>
    </div>
  </div>
</template>