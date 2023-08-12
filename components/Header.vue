<template>
    <div class="container-fluid" id="head">
        <div class="container-lg" id="headContent">
        <button type="button" class="toggleBtn d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-controls="offcanvasNav"><IconsBars /></button>
        <div class="mx-auto mx-lg-0 me-lg-auto">
            <NuxtLink to="/"><img src="@/assets/images/uplbspacesDark275.png" width="165"></NuxtLink>
            <div class="d-none d-lg-inline ms-1"><small>Your online reservation system for</small><img src="@/assets/images/upSeal40.png" class="mx-1"><small> U.P. Los Baños Facilities.</small></div>
        </div>
        <div class="d-none d-lg-flex">
            <input type="text" id="headSearch" class="form-control form-control-sm rounded-start rounded-end-0" style="width:200px" placeholder="search">
            <button type="button" class="btn btn-sm btn-success rounded-start-0 rounded-end"><IconsMagnifyingGlass /></button>
        </div>
        <button type="button" class="toggleBtn d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch"><IconsMagnifyingGlass /></button>
        </div>
    </div>
</template>