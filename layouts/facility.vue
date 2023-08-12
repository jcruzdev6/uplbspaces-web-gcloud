<template>
    <div>
        <Header />
        <TopNav />
        <div id="mainBg">
            <slot />
            <Footer />
        </div>

        <SidebarNav />
        <SidebarSearch />
        <SidebarSignIn />
        <SidebarSignUp />
        <SidebarForgotPassword />
        <SidebarUploadPayment />

        <ModalSignIn />
        <ModalSignUp />
        <ModalForgotPassword />
        <ModalUploadPayment />

        <FacilityBookingModalBookNow />
    </div>
</template>

<script setup>
const facilityTypeStore = useFacilityTypeStore();
const pageStore = usePageStore();

facilityTypeStore.fetchFacilityTypes();
pageStore.fetchPages();
</script>