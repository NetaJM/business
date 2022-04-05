(function() {
    // Read more
    const readMoreBtn = document.querySelector('.read-more');
    const readMoreContent = document.querySelector('.read-more-content');

    readMoreBtn.addEventListener('click', () => {
        readMoreContent.classList.toggle('show-content');
        if (readMoreContent.classList.contains('show-content')) {
            readMoreBtn.textContent = 'Show less';
        } else {
            readMoreBtn.textContent = 'Show more';
        }
    })
})()