<template>
    <div class="offcanvas offcanvas-start d-lg-none" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasSearch">
        <button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close"><IconsXMark /></button>
        <div class="offcanvas-header">
            <h3 class="offcanvasTitle">Search</h3>
        </div>
        <div class="offcanvas-body">
            <div class="offcanvasContainer">
                <label for="offcanvasSearchForm-search">Which space do you need?</label>
                <input type="text" id="offcanvasSearchForm-search" class="form-control form-control-sm rounded"
                    placeholder="ex. Umali Hall">

                <label for="offcanvasSearchForm-cap">For how many persons?</label>
                <div class="d-flex">
                    <input type="number" id="offcanvasSearchForm-cap-min" class="form-control form-control-sm rounded me-1"
                        placeholder="min">-
                    <input type="number" id="offcanvasSearchForm-cap-max" class="form-control form-control-sm rounded ms-1"
                        placeholder="max">
                </div>

                <label for="offcanvasSearchForm-date">When do you need it?</label>
                <input type="date" id="offcanvasSearchForm-date" class="form-control form-control-sm rounded"
                    placeholder="no. of persons">

                <div class="d-grid">
                    <button type="submit" class="btn btn-success btn-sm mt-2 mb-2 rounded">Search</button>
                </div>

        </div>
    </div>
</div></template>