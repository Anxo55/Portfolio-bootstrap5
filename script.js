window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 100) {
        header.style.top = '0';
    } else {
        header.style.top = '-70px';
    }
});