"use-strict";

(() => {
    // make sure JS is enabled
    const hideMenus = document.querySelectorAll('.expand-collapse-icon');
    hideMenus.forEach(el => {
        el.classList.add('loaded');
    })

    // if (window.innerWidth <= 768) {
    //     const sideNav = document.getElementById('side-nav');
    //     sideNav.classList.add('mobile');
    // }

    // const links = document.querySelectorAll('.clickable');
    // links.forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         e.preventDefault();
    
    //         if (e.target.classList.contains('active')) {
    //             e.target.classList.remove('active');
    //             e.target.parentElement.classList.remove('active');
    //         } else {
    //             e.target.classList.add('active');
    //             e.target.parentElement.classList.add('active');
    //         }
    //     })
    // })

    // const menuButton = document.getElementById('menu-button');
    // menuButton.addEventListener('click', () => {
    //     const openEls = document.querySelectorAll('sec-container');

    //     openEls.forEach(el => {
    //         el.target.classList.add('active');
    //     })
    // })

    // const navTitle = document.getElementById('nav-title');

    // navTitle.addEventListener('click', (e) => {
    //     if(e.target.classList.contains('active')) {
    //         e.target.classList.remove('active');
    //     } else {
    //         e.target.classList.add('active');
    //     }
    // })
})();