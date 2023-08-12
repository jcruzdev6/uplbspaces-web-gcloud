<template>
    <div class="container-fluid px-lg-3" id="main">
        <div class="container-lg" id="mainContent">
            <div id="mainGrid">
                <div id="mainGridMainCol" class="mainGridBox">
                    <div class="mainBreadcrumbs">
                        <NuxtLink to="/">Home</NuxtLink> <span><IconsCaretRight /></span> Spaces
                    </div>
                    <h3 class="mainTitle">Spaces</h3>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                        fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis
                        est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis
                        aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                        recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                        maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        <p>&nbsp;</p>
                </div>
                <!-- <div id="mainGridSideCol" class="mainGridBox">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
          </div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();

definePageMeta({
    layout: "facility"
});


</script>