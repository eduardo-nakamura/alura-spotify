
import React from 'react';
import './Playlist.css';
import Cards from './Cards/Cards'
const Playlist = ({ searchInput }) => {
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
              {data.cards.map(card => (
                <Cards key={card.id} name={card.name} urlImg={card.urlImg} id={card.id} />
              ))}
            </section>
          </div>
        </div>
      </div>

      {/* Artists */}
      <div id="result-artist" >
        <div className={`grid-container ${searchInput.length > 0 ? "" : "hidden"}`} id="grid-container">
          <p>
            Artistas
          </p>
        </div>
      </div>

    </div>
  );
};

const data = {
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

export default Playlist;
