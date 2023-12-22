"use-strict";

(() => {
    // make sure JS is enabled
    const hideMenus = document.querySelectorAll('.expand-collapse-icon');

    hideMenus.forEach(el => {
        el.classList.add('loaded');
    })


    const links = document.querySelectorAll('.clickable');
    links.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
    
            if (e.target.classList.contains('active')) {
                e.target.classList.remove('active');
                e.target.parentElement.classList.remove('active');
            } else {
                e.target.classList.add('active');
                e.target.parentElement.classList.add('active');
            }
        })
    })
})();