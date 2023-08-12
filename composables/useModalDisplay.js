export default function useModalDisplay(ele, hide = true, backdrop = 'modal-backdrop') {
    let modal;
    let modal_backdrops;
    modal = document.getElementById(ele)
    modal_backdrops = document.querySelectorAll('.'+backdrop)

    let display = (hide) ? 'none' : 'block';
    modal.style.display = display;
    modal_backdrops.forEach(el => {
        el.style.display = display;
    });
}