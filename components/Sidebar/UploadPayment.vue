<template>
    <div class="offcanvas offcanvas-start d-lg-none" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasProofOfPayment">
    <button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close"><IconsXMark /></button>
    <div class="offcanvas-header">
      <h3 class="offcanvasTitle">Proof of Payment</h3>
    </div>
    <div class="offcanvas-body">
      <div class="offcanvasContainer">
        <label for="offcanvasProofOfPaymentForm-file">Upload proof of payment</label>
        <input type="file" id="offcanvasProofOfPaymentForm-file" class="form-control form-control-sm rounded" placeholder="file">

        <div class="d-grid">
          <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Upload</button>
        </div>

      </div>
    </div>
  </div>
</template>