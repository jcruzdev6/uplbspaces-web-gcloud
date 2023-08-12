<template>
    <div class="container-fluid px-lg-3" id="main">
        <div class="container-lg" id="mainContent">
            <div id="mainGrid">
                <div id="mainGridMainCol" class="mainGridBox">
                    <PageBreadcrumbs page_name="My Bookings" />
                    <h3 class="mainTitle">My Bookings</h3>
                    <p></p>
                    <p>&nbsp;</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
definePageMeta({
  middleware: 'auth'
})
</script>