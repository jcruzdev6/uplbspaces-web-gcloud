import { defineStore } from "pinia";

export const useFacilityTypeStore = defineStore("facility_type", {
    state: () => ({
        facility_types: null,
        facility_type: null
    }),

    actions: {
        async fetchFacilityTypes() {
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const results = await $fetch(API_PATH+'/facility_types')
            
            this.facility_types = results.data;
        },  
        async fetchFacilityType(id) {
            const facility_type = this.facility_types.filter((item) => {
                return item['id'] == id      
            });
            this.facility_type = facility_type[0];
        },     
    },
});