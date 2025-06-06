document.addEventListener('DOMContentLoaded', function() {
    fetch('data/data.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            renderPlaylistCards(data.playlists);
            setupModal();
            let select = document.getElementById('sort');
            select.addEventListener('change', function(event) {
                sortPlaylist(select);

            })
            window.playlistData = data;
            const searchBar = document.getElementById('search');
            searchBar.addEventListener('input', function(event) {
                if(event.target.value.length > 1){
                    setupSearchBar();
                    setupModal();
                } else {
                    renderPlaylistCards(data.playlists)
                    setupModal();
                }
            });
        });
});



function sortPlaylist(select){
    const selectedOption = select.options[select.selectedIndex];
    if (selectedOption.value === '1') {
        console.log('Sorting by name');
        window.playlistData.playlists.sort((a, b) => a.playlist_name.localeCompare(b.playlist_name));
    } else if (selectedOption.value === '2') {
        console.log('Sorting by likes');
        window.playlistData.playlists.sort((a, b) => b.likes - a.likes);
    } else if (selectedOption.value === '3') {
        console.log('Sorting by date');
        window.playlistData.playlists.sort((a, b) => b.playlistID - a.playlistID);
    }
    renderPlaylistCards(window.playlistData.playlists);
    setupModal();
};




function renderPlaylistCards(playlists) {
    const playlistCardsContainer = document.getElementById('playlist-cards');
    playlistCardsContainer.innerHTML = '';

    playlists.forEach(playlist => {

        if(playlist.deleted){
            return;
        }

        const playlistCard = document.createElement('article');
        playlistCard.className = 'playlist-card';
        playlistCard.dataset.playlistId = playlist.playlistID;
        let imageToUse;

        if(playlist.liked){
            imageToUse = "assets/img/download.png";
        }else{
            imageToUse = "assets/img/black-heart-love-valentine-symbol-sign-icon-transparent-background-7040816949546730lc5mhxmre.png";
        }

        playlistCard.innerHTML = `
            <img src="${playlist.playlist_art}" alt="${playlist.playlist_name}" class="playlist-img">
            <div class="playlist-title-name">
                <h2 class="playlist-title">${playlist.playlist_name}</h2>
                <p class="creator-name">${playlist.playlist_author}</p>
            </div>
            <div class="like-count">
                <img class="like-button" src="${imageToUse}" width="30" height="30" alt="heartImg">
                <p>${playlist.likes}</p>
            <div class="delete-section">
                <img class="delete-button" src="assets/img/trash.jpg" width="30" height="30" alt="deleteImg">
                </div>
            </div>
        `;

        playlistCardsContainer.appendChild(playlistCard);
    });

    setupLikeButtons();
    setupDeleteButtons();
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
            if (event.target.classList.contains('like-button') || event.target.classList.contains('delete-button')) {
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
        button.addEventListener('click', function(event) {
            const playlistCard = button.closest('.playlist-card');
            const playlistId = parseInt(playlistCard.dataset.playlistId);
            const likeCountElement = playlistCard.querySelector('.like-count p');
            const playlist = window.playlistData.playlists.find(p => p.playlistID === playlistId);
            isLiked = playlist.liked;

            if (playlist) {
                if (!isLiked) {
                    button.src = redHeartPath;
                    playlist.likes++;
                    playlist.liked = true;
                } else {
                    button.src = blackHeartPath;
                    playlist.likes = --playlist.likes;
                    playlist.liked = false;
                }
                likeCountElement.textContent = playlist.likes;
            }
        });
    });
}

function setupDeleteButtons() {
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            const playlistCard = button.closest('.playlist-card');
            const playlistId = parseInt(playlistCard.dataset.playlistId);
            const playlist = window.playlistData.playlists.find(p => p.playlistID === playlistId);
            if (playlist) {
                playlist.deleted = true;
                renderPlaylistCards(window.playlistData.playlists);

            }
        });
    });
}


function setupSearchBar() {
    const searchBar = document.getElementById('search');
    const searchTerm = event.target.value.toLowerCase();
    const playlistCards = document.querySelector('.playlist-card');
    if (window.playlistData.playlists.find(p => p.playlist_name.toLowerCase().includes(searchTerm))){
        for (let i = 0; i < window.playlistData.playlists.length; i++) {
            const playlist = window.playlistData.playlists[i];
            if(playlist.deleted){
                continue;
            }
            const playlistCard = document.querySelector(`.playlist-card[data-playlist-id="${playlist.playlistID}"]`);
            console.log(playlistCard)
            const playlistName = playlistCard.querySelector('.playlist-title').textContent.toLowerCase();
            if (!playlistName.includes(searchTerm) && !playlist.deleted) {
                playlistCard.style.display = 'none';
            }
        }
    } else {
        playlistCards.style.display = 'none';
    }
}
