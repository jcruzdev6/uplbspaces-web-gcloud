import { defineStore } from "pinia";

export const useFacilityStore = defineStore("facility", {
    state: () => ({
        facilities: null,
        facility: null
    }),
    getters: {
        rates(state) {
            if (state.facility != null) {
                const rates = state.facility.facility_rates.filter((item) => {
                    return item['category'] == 'facility'      
                });
                return rates;
            }
            return '';
        },
        rate(state) {
            if (state.facility != null) {
                const rates = state.facility.facility_rates.filter((item) => {
                    return item['category'] == 'facility'      
                });
                if (rates.length > 0) return rates[0];
                else return [];
            }
            return '';
        }
    },
    actions: {
        async fetchFacilitiesByType(type_id) {
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const results = await $fetch(API_PATH+'/facilities/type/'+type_id)
            
            this.facilities = results.data;
        },        
        async fetchFacility(id) {
            const API_PATH = useRuntimeConfig().public.jsonApiPath;
            const results = await $fetch(API_PATH+'/facilities/'+id)
            
            this.facility = results.data;
        },      
    },
});