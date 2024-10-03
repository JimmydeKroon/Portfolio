const portfolioContainer = document.querySelector('.portfolio_cards');

portfolioContainer.addEventListener('click', e => {
    // console.log(e.target);

    const modalToggle = e.target.closest('.portfolio-btn');
    // console.log(modalToggle);
    if (! modalToggle) return;

    const modal = modalToggle.parentNode.nextElementSibling.nextElementSibling;
    const closeButton = modal.querySelector('.modal-close');
    // console.log(closeButton);

    const modalOpen = _ => {
        modal.classList.add('is-open');
        modal.style.animation = 'modalIn 500ms forwards';
        document.body.style.overflowY = 'hidden';
    }

    const modalClose = _ => {
        modal.classList.remove('is-open');
        modal.removeEventListener('animationend', modalClose);
    }

    closeButton.addEventListener('click', _ => {
        modal.style.animation = 'modalOut 500ms forwards';
        modal.addEventListener('animationend', modalClose);
        document.body.style.overflowY = 'scroll';
    })

    document.addEventListener('keydown', e => {
        // console.log(e);
        if ( e.keyCode === 27 ) {
            modal.style.animation = 'modalOut 500ms forwards';
            modal.addEventListener('animationend', modalClose);
            document.body.style.overflowY = 'scroll';
        }
    })


    modalOpen();

})