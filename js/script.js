// function ibg(){
//     let ibg = document.querySelectorAll(".ibg");
//         for (var i = 0; i < ibg.length; i++) {
//             if(ibg[i].querySelector('img')){
//             ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
//             }
//         }
//     }

// ibg();

window.addEventListener('DOMContentLoaded', () => {

    // const block_2 = document.querySelector('.car__block_2');

    // function hideBlock(block) {
    //     if (block.clientHeight < 600) {
    //         block.style.display = 'none';
    //     } else {

    //     }
    // }

    // hideBlock(block_2);

    // function showBlock(block) {
    //     if (block.clientHeight >= 600) {
    //         block.style.display = '';
    //     }
    // }

    // showBlock(block_2);

    const hamburger = document.querySelector('.hamburger'),
          menu = document.querySelector('.nav__menu'),
          links = document.querySelectorAll('.nav__item'),
          link = document.querySelectorAll('.link__menu');


    function menuHamburger(e) {
        if (e.target && hamburger.classList.contains('hamburger__active')) {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.remove('active');
            // document.body.style.overflow = '';
        } else {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.add('active');
            // document.body.style.overflow = 'hidden';
        }
    }

    hamburger.addEventListener('click', (event) => {
        menuHamburger(event);
    });


    // ===========================================================
    menu.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('link__menu')) {
            link.forEach((item, i) => {
                if (e.target == item) {
                    hamburger.classList.toggle('hamburger__active');    
                    menu.classList.remove('active');
                }
            });
        }
    });
    // ===========================================================
    


    const window = document.querySelector('.subheader__window_main'),
          btn = document.querySelector('.window__btn'),
          burger = document.querySelector('.window__burg'),
          subheader__btn = document.querySelector('.subheader__btn'),
          body = document.querySelector('body');


    function showWindow() {
        window.classList.add('window__active');
    }

    subheader__btn.addEventListener('click', showWindow);

    function hideWindow () {
        window.classList.remove('window__active');
    }

    burger.addEventListener('click', hideWindow);

    btn.addEventListener('click', (event) => {
        event.preventDefault();
        hideWindow();
    });

    window.addEventListener('click', (event) => {
        if (event.target === window) {
            hideWindow();
        }
    });

});