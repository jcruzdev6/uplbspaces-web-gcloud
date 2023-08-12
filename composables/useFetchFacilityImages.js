//import fs from 'fs';
export default function useFetchFacilityImages(id, type_id) {
    const folderPath = '/assets/images/facilities/'+type_id+'/'+id+'/';
    const allImages = import.meta.glob('@/assets/images/facilities/*/*/*', {eager: true}); 
    let images = [];
    for (const key in allImages) {
        if (key.includes(folderPath)) {
            images.push(allImages[key]["default"]);
        }
    }
    return images;
}