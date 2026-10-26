import './GameCard.css';

export default function GameCard({ game, onDelete }) {
  return (
    <div className="game-card">
      <img src={game.image || 'https://via.placeholder.com/300x150'} alt={game.title} className="game-image" />
      <div className="game-info">
        <span className="game-genre">{game.genre}</span>
        <h3>{game.title}</h3>
        <p className="game-desc">{game.description}</p>
        <div className="game-footer">
          <span className="game-year">Release: {game.releaseYear}</span>
          <button className="btn-delete" onClick={() => onDelete(game.id)}>
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}