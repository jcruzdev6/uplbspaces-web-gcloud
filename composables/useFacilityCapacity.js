export default function useFacilityCapacity(min, max) {
    if (max == null) return '> ' + min + ' pax';
    else if (min == null) return '< ' + max + ' pax';
    else return min + ' - ' + max + ' pax';
}