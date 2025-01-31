import React from 'react';

function Cards({name, urlImg, id}) {
    return (
        <a href={urlImg} className="cards">
            <div className={`cards cardbg${id}`}>
                <img src={urlImg} alt={name} />
                <span>{name}</span>
            </div>
        </a>
    );
}

export default Cards;
