window.addEventListener('DOMContentLoaded', function (e) {
    document.querySelector('.presentation').onclick = handlePresentationClick;
})

function handlePresentationClick(e) {
    const current = document.querySelector('.slide.active');

    next = current.nextElementSibling;

    if (next) {
        current.classList.remove('active');
        next.classList.add('active');
    }
}