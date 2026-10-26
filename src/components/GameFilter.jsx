export default function GameFilter({ searchTerm, onSearchChange, selectedGenre, onGenreChange }) {
  return (
    <div className="game-filter">
      <input
        type="text"
        placeholder="Cari judul game..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="genre-select"
      >
        <option value="">Semua Genre</option>
        <option value="Action">Action</option>
        <option value="RPG">RPG</option>
        <option value="Adventure">Adventure</option>
        <option value="Strategy">Strategy</option>
      </select>
    </div>
  );
}