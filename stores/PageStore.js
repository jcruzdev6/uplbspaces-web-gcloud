import { defineStore } from "pinia";

export const usePageStore = defineStore("page", {
    state: () => ({
        pages: null,
        page: null
    }),

    actions: {
        async fetchPages() {
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const results = await $fetch(API_PATH+'/pages')
            
            this.pages = (await results.data);
        },
        async fetchPage(id) {
            /*let page = {};
            if (this.pages) {
                page = this.pages.filter((item) => {
                    return item['id'] == id      
                });
            }
            return page;*/
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const results = await $fetch(API_PATH+'/pages/'+id);

            this.page = (await results.data);
        },          
    },
});