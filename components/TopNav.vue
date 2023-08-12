<template>
    <div class="container-fluid" id="nav">
        <div class="container-lg d-lg-none" id="navTagline">
            Your online reservation system for U.P. Los Baños Facilities.
        </div>
        <nav class="container-lg d-none d-lg-flex" id="navContent">
            <ul id="navMenu" class="me-auto">
                <li>
                    <a href="#" class="navMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Spaces <IconsCaretDown 
                            class="ms-2" style="font-size: .6em;" /></a>
                    <ul class="dropdown-menu">
                        <li v-for="(facility_type, index) in facilityTypeStore.facility_types"
                            :key="index"><NuxtLink :to="'/spaces/'+facility_type.id" class="dropdown-item">{{ facility_type.name }}</NuxtLink></li>                        
                    </ul>
                </li>
                <li v-for="(page, index) in pageStore.pages"
                    :key="index"><NuxtLink :to="'/pages/'+page.id" class="navMenuLink">{{ page.name }}</NuxtLink></li>
            </ul>
            <ul v-show="auth.isLoggedIn" id="navUserMenu">
                <li class="navUserMenuItem"><NuxtLink to="/auth/mybookings" class="navUserMenuLink"><IconsFolder />&nbsp;My Bookings</NuxtLink></li>
                <li style="width: 1px;"></li>
                <li class="navUserMenuItem"><NuxtLink to="/auth/myaccount" class="navUserMenuLink"><IconsImagePortrait />&nbsp;My Account</NuxtLink></li>
                <li style="width: 1px;"></li>
                <li class="navUserMenuItem"><button @click="handleLogout" class="navUserMenuLink"><IconsSquareXMark />&nbsp;Sign Out</button></li>
            </ul>
            <a v-show="!auth.isLoggedIn" href="#" class="navMenuLink" data-bs-toggle="modal" data-bs-target="#modalSignin">Sign In <IconsCircleUser class="fs-5 ms-1" /></a>
            <a v-show="!auth.isLoggedIn" href="#" class="navUserMenuLink" data-bs-toggle="modal" data-bs-target="#modalSignup">Sign Up</a>
        </nav>
    </div>
</template>

<script setup>
const facilityTypeStore = useFacilityTypeStore();
const pageStore = usePageStore();
const auth = useAuthStore();

async function handleLogout() {
  await auth.logout();
}
</script>
  