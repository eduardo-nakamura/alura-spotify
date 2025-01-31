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
    <>
      <Header searchInput={searchInput} onSearchChange={handleSearchChange} />
      <section className='container-spotify'>
        <Sidebar />
        <Playlist searchInput={searchInput} />
      </section>
      <Footer />
    </>
  );
}

export default App;
