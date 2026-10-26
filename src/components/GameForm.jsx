import { useState } from 'react';

export default function GameForm({ onAddGame }) {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('Action');
  const [releaseYear, setReleaseYear] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newGame = {
      id: Date.now(),
      title,
      genre,
      releaseYear,
      description,
      image,
    };

    onAddGame(newGame);

    // Reset form
    setTitle('');
    setGenre('Action');
    setReleaseYear('');
    setDescription('');
    setImage('');
  };

  return (
    <form className="game-form" onSubmit={handleSubmit}>
      <h2>Tambah Game Baru</h2>
      <div className="form-group">
        <label>Judul Game:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Contoh: The Witcher 3"
          required
        />
      </div>
      <div className="form-group">
        <label>Genre:</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="Action">Action</option>
          <option value="RPG">RPG</option>
          <option value="Adventure">Adventure</option>
          <option value="Strategy">Strategy</option>
        </select>
      </div>
      <div className="form-group">
        <label>Tahun Rilis:</label>
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          placeholder="2023"
        />
      </div>
      <div className="form-group">
        <label>URL Gambar (Opsional):</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://..."
        />
      </div>
      <div className="form-group">
        <label>Deskripsi:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Deskripsi singkat game..."
        />
      </div>
      <button type="submit" className="btn-submit">Simpan Game</button>
    </form>
  );
}