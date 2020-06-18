window.addEventListener('DOMContentLoaded', () => {
    // Book table modal
    const bookBtn = document.querySelector('.btn_black');
    const modal = document.querySelector('.overlay');
    const closeModal = document.querySelector('#modal_close');
    const modalForm = document.querySelector('.modal');
    const btnReserv = document.querySelector('.reservation_btn');

    function noScroll() {
        document.body.style = 'overflow: hidden';
    }

    function scroll() {
        document.body.style = 'overflow: visible';
    }

    bookBtn.addEventListener('click', () => {
        modal.classList.add('overlay_active');
        noScroll();
    });

    
    closeModal.addEventListener('click', () => {
        modal.classList.remove('overlay_active');
        scroll();
    });


    // Mobile hamburger navigation
    const nav = document.querySelector('.nav');
    const close = document.querySelector('#close');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.add('hamburger_active');
        nav.classList.add('nav__active');
        noScroll();
    });

    close.addEventListener('click', () => {
        hamburger.classList.remove('hamburger_active');
        nav.classList.remove('nav__active');
        scroll();
    });

    // Scrolling animation
    const dish = document.querySelector('.cook__dish');
    const dishAnimated = document.querySelector('.cook__dish_img');
    const ingredients = document.querySelector('.ingredients__block');

    function isVisible(elem) {
        return elem.getBoundingClientRect().top;
    }

    window.addEventListener('scroll', () => {
        if (isVisible(dish) <= 150) {
            dishAnimated.classList.add('cook__dish_img_animated');
        }

        if (isVisible(ingredients) < 150) {
            ingredients.classList.add('ingredients__block_animated');
        }
    });
    


    // Book success
    const form = document.querySelector('form');
    
    function thanksWindow() {
        let thanks = document.createElement(`div`);
        thanks.classList.add('modal__mini');
        thanks.innerHTML = `
                <div id="close" class="nav__item">&times;</div>
                <div class="modal__subtitle">Thanks for your reservation!</div>
                    <div class="modal__descr">Our manager will contact you ASAP!</div>
                </div>
                `;
        return thanks;
    }

    btnReserv.addEventListener('click', (event) => {
        event.preventDefault();
        form.append(thanksWindow());
    });
    
});
