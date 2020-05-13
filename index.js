window.addEventListener('DOMContentLoaded', function (e) {
    document.querySelector('.presentation').onclick = handlePresentationClick;
})

function handlePresentationClick(e) {
    const current = document.querySelector('.slide.active');

    next = current.nextElementSibling;

    if (next) {
        current.classList.remove('active');
        next.classList.add('active');

        var aa = parseInt(next.getAttribute('data-autoadvance'));

        if (!isNaN(aa)) {
            setTimeout(function () {
                handlePresentationClick()
            }, aa);
        }
    }
}