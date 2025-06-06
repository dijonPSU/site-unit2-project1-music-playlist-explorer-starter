document.addEventListener('DOMContentLoaded', function() {
    fetch('data/data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('error help pls');
            }
            return response.json();
        })
        .then(data => {
            const randomPlaylist = RandomPlaylist(data.playlists);
            displayFeaturedPlaylist(randomPlaylist);
        })
        .catch(error => {
            console.error('Error fetching playlist data:', error);
        });
});

function RandomPlaylist(playlists) {
    const randomIndex = Math.floor(Math.random() * playlists.length);
    return playlists[randomIndex];
}

function displayFeaturedPlaylist(playlist) {
    document.getElementById('featured-img').src = playlist.playlist_art;
    document.getElementById('featured-title').textContent = playlist.playlist_name;
    document.getElementById('featured-creator').textContent = `Created by ${playlist.playlist_author}`;
    const songsContainer = document.getElementById('featured-songs-container');
    songsContainer.innerHTML = '';

    playlist.songs.forEach(song => {
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

    document.title = `${playlist.playlist_name} - Featured Playlist`;
}
