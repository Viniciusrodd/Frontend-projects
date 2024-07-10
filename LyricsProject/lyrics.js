
var form = document.getElementById('lyricsForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const artist = document.getElementById('iArtist').value;
    const song = document.getElementById('iSong').value;

    const apiKey = 'bc2f186b989bc775d16590f1123e34f4';

    function fetchLyrics(artist, song) {
        const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${encodeURIComponent(song)}&q_artist=${encodeURIComponent(artist)}&apikey=${apiKey}`;

        fetch(url)
            .then(response => response.json()) // Corrigido: Retornando a promessa de response.json()
            .then(data => {
                const lyrics = data.message.body.lyrics.lyrics_body;
                document.getElementById('div-lyrics').textContent = lyrics || 'Lyrics not found';
            })
            .catch(error => {
                console.error('Error fetching lyrics:', error);
                document.getElementById('div-lyrics').textContent = 'Error fetching lyrics';
            });
    }

    fetchLyrics(artist, song); // Chamando a função para buscar as letras
});


