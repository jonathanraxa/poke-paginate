import { ButtonGroup, Button, Card, ListGroup } from 'react-bootstrap';
import { useGetPokemon } from '../../hooks/useGetPokemon';
import './pokemon-cards.less';

export const PokemonCards = () => {
  const { allPokemon, page, setPage, total } = useGetPokemon({ limit: 20 });

  return (
    <div className="pokemon-app">
      <div className="pokemon-grid">
        {allPokemon.map((poke) => (
          <Card key={poke.name} className="pokemon-card">
            <div className="pokemon-image-container">
              <Card.Img
                variant="top"
                src={poke.img}
                className="pokemon-image"
                alt={`${poke.name} sprite`}
              />
            </div>
            <Card.Body className="pokemon-body">
              <Card.Title className="pokemon-name">
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </Card.Title>
              <div className="pokemon-stats">
                {poke.stats.map((stat) => (
                  <div key={stat.stat?.name} className="stat-item">
                    <span className="stat-name">{stat.stat?.name}</span>
                    <div className="stat-bar">
                      <div
                        className="stat-fill"
                        style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                      ></div>
                    </div>
                    <span className="stat-value">{stat.base_stat}</span>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="pagination-container">
        <ButtonGroup className="pagination-buttons">
          <Button
            variant="outline-primary"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page <= 1}
            className="nav-button"
          >
            ← Previous
          </Button>
          <div className="page-info">
            Page {page} of {total}
          </div>
          <Button
            variant="outline-primary"
            onClick={() => setPage((prev) => Math.min(prev + 1, total))}
            disabled={page >= total}
            className="nav-button"
          >
            Next →
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};