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
    </div>
</template>

<script setup>
const auth = useAuthStore();
const facilityTypeStore = useFacilityTypeStore();
const pageStore = usePageStore();

facilityTypeStore.fetchFacilityTypes();
pageStore.fetchPages();
</script>