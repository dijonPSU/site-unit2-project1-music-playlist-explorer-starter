document.addEventListener('DOMContentLoaded', function() {
    const playlistCards = document.querySelectorAll('.playlist-card');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.querySelector('.modal-content');


    if (!document.querySelector('.close-button')) {
        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        modalContent.prepend(closeButton);


        closeButton.addEventListener('click', function() {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    playlistCards.forEach(card => {
        card.addEventListener('click', function() {

            const image = card.querySelector('.playlist-img').src;
            const title = card.querySelector('.playlist-title').textContent;
            const creator = card.querySelector('.creator-name').textContent;
            const likes = card.querySelector('.like-count p').textContent;


            document.querySelector('.modal-playlist-img').src = image;
            document.querySelector('.modal-title').textContent = title;
            document.querySelector('.modal-creator').textContent = creator;


            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });


    modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });


    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
