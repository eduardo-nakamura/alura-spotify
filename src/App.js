import React, { useState } from 'react';
import './reset.css';
import './App.css';
import './var.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Playlist from './Components/Playlist/Playlist';

function App() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="main-container">
      <Sidebar />
      <section className='container-spotify'>
        <Header searchInput={searchInput} onSearchChange={handleSearchChange} />
        <Playlist searchInput={searchInput} />
      </section>
      <Footer />
    </div>
  );
}

export default App;
