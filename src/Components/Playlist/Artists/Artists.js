import React from 'react';

function Artists({ name, urlImg, id,genre }) {
    return (
        <div className="artist-card">
            <div className="card-img">
                <img  className="artist-img" src={urlImg} alt={name} />
                <div className="play">
                    <span className="fa fa-solid fa-play"></span>
                </div>
            </div>
            <div className="card-text">
                <a title={name} className="vst" href={urlImg}>
                <p className="artist-name" id="artist-name">{name}</p>
                <p className="artist-categorie">{genre}</p>
                </a>
            </div>
        </div >
    );
}

export default Artists;
