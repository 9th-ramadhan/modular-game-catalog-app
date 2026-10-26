import { useState } from 'react';
import GameCard from './components/GameCard';
import GameForm from './components/GameForm';
import GameFilter from './components/GameFilter';
import './App.css';

export default function App() {
  // State Utama Game Catalog di Parent
  const [games, setGames] = useState([
    {
      id: 1,
      title: 'Cyberpunk 2077',
      genre: 'Action',
      releaseYear: 2020,
      description: 'Open-world, action-adventure story set in Night City.',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      title: 'Baldur’s Gate 3',
      genre: 'RPG',
      releaseYear: 2023,
      description: 'A story-rich, party-based RPG set in the universe of Dungeons & Dragons.',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&auto=format&fit=crop&q=60'
    }
  ]);

  // State untuk Filter & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  // Event Callback: Menambah game baru
  const handleAddGame = (newGame) => {
    setGames([newGame, ...games]);
  };

  // Event Callback: Menghapus game berdasarkan ID
  const handleDeleteGame = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  // Proses Filter & Search Data
  const filteredGames = games.filter((game) => {
    const matchesTitle = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === '' || game.genre === selectedGenre;
    return matchesTitle && matchesGenre;
  });

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>
          <span className="header-icon">🎮</span>
          <span>Game Catalog Dashboard</span>
        </h1>
        <p>Kelola koleksi game favoritmu dengan mudah dan interaktif</p>
      </header>

      <div className="app-content">
        {/* Kolom Kiri: Form Input */}
        <aside className="sidebar">
          <GameForm onAddGame={handleAddGame} />
        </aside>

        {/* Kolom Kanan: Filter & Daftar Game */}
        <main className="main-content">
          <GameFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
          />

          <div className="game-grid">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <GameCard key={game.id} game={game} onDelete={handleDeleteGame} />
              ))
            ) : (
              <p className="no-data">Tidak ada game yang ditemukan.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}