export default function useTimeSelection(time) {
    const times = [];
    const arr = time.split('-');

    if (arr.length != 2) return times;

    const start = arr[0].trim();
    const end = arr[1].trim();


    let start_hr = start.split(':')[0];
    let start_min = start.split(':')[1].replace('AM', '').replace('PM', '');
    if (start.toLowerCase().includes('pm'))
        start_hr = 12 + Number(start_hr);

    let end_hr = end.split(':')[0];
    let end_min = end.split(':')[1].replace('AM', '').replace('PM', '');
    if (end.toLowerCase().includes('pm'))
        end_hr = 12 + Number(end_hr);
            
    if (start_hr > end_hr) return times;

    for (let i = start_hr; i < end_hr; i++) {
        let curr_shr = (i == 12) ? '12:00PM' : (i > 12) ? i-12 +':'+ start_min+'PM' : i+':'+start_min+'AM';
        let j = Number(i)+1;
        let curr_ehr = (j == 12) ? '12:00PM' : (j > 12) ? j-12 +':'+ end_min+'PM' : (Number(i)+1)+':'+end_min+'AM';
        let curr_time = curr_shr + ' - ' + curr_ehr;
        times.push(curr_time);
    }

    return times;
}