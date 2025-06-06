document.addEventListener('DOMContentLoaded', function() {
    fetch('data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('error help pls');
            }
            return response.json();
        })
        .then(data => {

            window.playlistData = data;
            renderPlaylistCards(data.playlists);
            setupModal();
        })
        .catch(error => {
            console.error('error help pls 2', error);
        });
});

function renderPlaylistCards(playlists) {
    const playlistCardsContainer = document.getElementById('playlist-cards');
    playlistCardsContainer.innerHTML = '';

    playlists.forEach(playlist => {
        const playlistCard = document.createElement('article');
        playlistCard.className = 'playlist-card';
        playlistCard.dataset.playlistId = playlist.playlistID;

        playlistCard.innerHTML = `
            <img src="${playlist.playlist_art}" alt="${playlist.playlist_name}" class="playlist-img">
            <div class="playlist-title-name">
                <h2 class="playlist-title">${playlist.playlist_name}</h2>
                <p class="creator-name">${playlist.playlist_author}</p>
            </div>
            <div class="like-count">
                <img class="like-button" src="assets/img/black-heart-love-valentine-symbol-sign-icon-transparent-background-7040816949546730lc5mhxmre.png" width="30" height="30" alt="heartImg">
                <p>${playlist.likes}</p>
            </div>
        `;

        playlistCardsContainer.appendChild(playlistCard);
    });

    setupLikeButtons();
}


function setupModal() {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.querySelector('.modal-content');

    let currentPlaylist = null;

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


    const shuffleButton = document.getElementById('shuffle-button');
    shuffleButton.addEventListener('click', function() {
        if (currentPlaylist) {
            const shuffledSongs = shuffleSongs([...currentPlaylist.songs]);
            renderSongs(shuffledSongs);
        }
    });

    const playlistCards = document.querySelectorAll('.playlist-card');
    playlistCards.forEach(card => {
        card.addEventListener('click', function(event) {
            if (event.target.classList.contains('like-button')) {
                return;
            }

            const playlistId = parseInt(card.dataset.playlistId);
            const playlist = window.playlistData.playlists.find(p => p.playlistID === playlistId);

            if (playlist) {
                currentPlaylist = playlist;
                document.querySelector('.modal-playlist-img').src = playlist.playlist_art;
                document.querySelector('.modal-title').textContent = playlist.playlist_name;
                document.querySelector('.modal-creator').textContent = playlist.playlist_author;


                shuffleButton.textContent = "Shuffle";
                renderSongs(playlist.songs);
                modalOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    modalOverlay.addEventListener('click', function(event) {
        if (event.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}


function shuffleSongs(songs) {
    return songs.sort(() => Math.random() - 0.5);
}


function renderSongs(songs) {
    const songsContainer = document.querySelector('.songs-container');
    songsContainer.innerHTML = '';

    songs.forEach(song => {
        const songBox = document.createElement('div');
        songBox.className = 'song-box';

        songBox.innerHTML = `
            <img class="song-box-img" src="${song.song_art}" alt="${song.song_name}">
            <div class="song-box-info">
                <p>${song.song_name}</p>
                <p>${song.artist}</p>
                <p>${song.album}</p>
            </div>
            <div class="song-duration">${song.duration}</div>
        `;

        songsContainer.appendChild(songBox);
    });
}


function setupLikeButtons() {
    const likeButtons = document.querySelectorAll('.like-button');
    const blackHeartPath = "assets/img/black-heart-love-valentine-symbol-sign-icon-transparent-background-7040816949546730lc5mhxmre.png";
    const redHeartPath = "assets/img/download.png";

    likeButtons.forEach(button => {
        let isLiked = false;
        button.addEventListener('click', function(event) {
            const playlistCard = button.closest('.playlist-card');
            const playlistId = parseInt(playlistCard.dataset.playlistId);
            const likeCountElement = playlistCard.querySelector('.like-count p');
            const playlist = window.playlistData.playlists.find(p => p.playlistID === playlistId);

            if (playlist) {
                isLiked = !isLiked;
                if (isLiked) {
                    button.src = redHeartPath;
                    playlist.likes++;
                } else {
                    button.src = blackHeartPath;
                    playlist.likes = 0;
                }

                likeCountElement.textContent = playlist.likes;
                console.log(`playlist like worked`);
            }
        });
    });
}
