<template>
    <div class="offcanvas offcanvas-start d-lg-none" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasNav">
        <button type="button" class="toggleBtn ms-auto mt-2 me-2" data-bs-dismiss="offcanvas" aria-label="Close"><IconsXMark /></button>
        <div class="offcanvas-header">
            <!-- <h3 class="offcanvasTitle"><IconCircleUser class="me-1" />Hello Joe</h3> -->
            <a href="#" class="offcanvasTitleAnchor" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSignin"
                aria-controls="offcanvasSignin"><IconsCircleUser class="fs-5 me-1" />Sign In</a>
            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSignup" aria-controls="offcanvasSignup">Not yet
                a member? Sign Up</a>
        </div>
        <div class="offcanvas-body">
            <div>
                <ul id="sideMenu">
                    <li>
                        <a class="sideMenuLink" data-bs-toggle="collapse" data-bs-target="#menu2SpacesSub"
                            aria-expanded="false">Spaces <IconsCaretDown class="ms-2"
                                style="font-size: .6em;" /></a>
                        <ul class="sideMenuSub collapse" id="menu2SpacesSub">
                            <li><a href="auditoriums.html" class="sideMenuLink sideMenuSubLink">Auditoriums</a></li>
                            <li><a href="events.html" class="sideMenuLink sideMenuSubLink">Event Halls</a></li>
                            <li><a href="lectures.html" class="sideMenuLink sideMenuSubLink">Lecture Halls</a></li>
                            <li><a href="classrooms.html" class="sideMenuLink sideMenuSubLink">Classrooms &amp; Meeting
                                    Rooms</a></li>
                            <li><a href="fields.html" class="sideMenuLink sideMenuSubLink">Fields &amp; Sports
                                    Facilities</a></li>
                            <li><a href="hostels.html" class="sideMenuLink sideMenuSubLink">Hostels &amp; Accomodations</a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="rates.html" class="sideMenuLink">Rates</a></li>
                <li><a href="faqs.html" class="sideMenuLink">FAQs</a></li>
                <li><a href="about.html" class="sideMenuLink">About</a></li>
                <li><a href="contact.html" class="sideMenuLink">Contact</a></li>
            </ul>
        </div>
    </div>
</div></template>