

const apiKey = 'bc2f186b989bc775d16590f1123e34f4'

function fetchLyrics(artist, song){
    const url = `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${song}&q_artist=${artist}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const lyrics = data.message.body.lyrics.lyrics_body;
            console.log(lyrics); // Exibe as letras no console
            // Adicione aqui o código para exibir as letras no HTML
        })
        .catch(error => {
            console.error('Error fetching lyrics:', error);
        });
}