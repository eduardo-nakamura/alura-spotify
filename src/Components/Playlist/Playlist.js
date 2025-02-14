
import React from 'react';
import './Playlist.css';
import Cards from './Cards/Cards'
import Artists from './Artists/Artists'
const Playlist = ({ searchInput }) => {
  const filteredArtists = artistsJson.artists.filter(artist =>
    artist.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className="playlist-container">
      {/* Playlists */}
      <div id="result-playlists" >
        <div className="playlist">
          <h1 id="greeting">Bom dia</h1>
          <h2 className="session">Navegar por todas as seções</h2>
        </div>


        <div className="offer__scroll-container">
          <div className="offer__list">
            <section className={`offer__list-item ${searchInput.length > 0 ? "hidden" : ""}`} id="cardsContainer" >
              {playlistJson.cards.map(card => (
                <Cards key={card.id} name={card.name} urlImg={card.urlImg} id={card.id} />
              ))}
            </section>
          </div>
        </div>
      </div>

      {/* Artists */}
      <div id="result-artist" >
        <div className={`grid-container ${searchInput.length > 0 ? "" : "hidden"}`} id="grid-container">
          {filteredArtists.map((artist) => (
            <Artists key={artist.id} name={artist.name} urlImg={artist.urlImg} id={artist.id} genre={artist.genre}/>
          ))}
        </div>
      </div>

    </div>
  );
};

const playlistJson = {
  "cards": [
    { "id": 1, "name": "Boas festas", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/1.jpeg" },
    { "id": 2, "name": "Feitos para você", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/2.png" },
    { "id": 3, "name": "Lançamentos", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/3.jpeg" },
    { "id": 4, "name": "Creators", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/4.jpeg" },
    { "id": 5, "name": "Para treinar", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/5.jpeg" },
    { "id": 6, "name": "Podcasts", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/6.jpeg" },
    { "id": 7, "name": "Sertanejo", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/7.jpeg" },
    { "id": 8, "name": "Samba e pagode", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/8.jpeg" },
    { "id": 9, "name": "Funk", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/9.jpeg" },
    { "id": 10, "name": "MPB", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/10.jpeg" },
    { "id": 11, "name": "Rock", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/11.jpeg" },
    { "id": 12, "name": "Hip Hop", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/12.jpeg" },
    { "id": 13, "name": "Indie", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/13.jpeg" },
    { "id": 14, "name": "Relax", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/14.jpeg" },
    { "id": 15, "name": "Música Latina", "urlImg": "https://eduardo-nakamura.github.io/imersao-front-end-alura/src/assets/playlist/15.jpeg" }
  ]
};
const artistsJson = {
  "artists": [
    {
      "id": 1,
      "name": "Foo Fighters",
      "genre": "Rock",
      "urlImg": "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15"
    },
    {
      "id": 2,
      "name": "Michael Jackson",
      "genre": "Pop",
      "urlImg": "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa"
    },
    {
      "id": 3,
      "name": "Emicida",
      "genre": "Hip Hop",
      "urlImg": "https://i.scdn.co/image/ab67616100005174908b4b4bc90e1518b68b4068"
    },
    {
      "id": 4,
      "name": "Chitãozinho e Xororó",
      "genre": "Sertanejo",
      "urlImg": "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4"
    },
    {
      "id": 5,
      "name": "Mc Coringa",
      "genre": "Funk",
      "urlImg": "https://i.scdn.co/image/ab67616d00001e02fe8f6dd361ad0f12b88c7f56"
    },
    {
      "id": 6,
      "name": "Arlindo Cruz",
      "genre": "Samba",
      "urlImg": "https://i.scdn.co/image/ab67616100005174181873f93056642d7b340839"
    },
    {
      "id": 7,
      "name": "Caetano Veloso",
      "genre": "MPB",
      "urlImg": "https://i.scdn.co/image/ab67616100005174e98de50f36cf1aa4bf047757"
    }
  ]
}
export default Playlist;
