import { useState } from 'react';
import './App.css';
import Search from './components/search';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <img src="./hero.png" alt="Hero Banner" />
        <header>
          <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
        </header>
      </div>

      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </main>
  )
}

export default App
