import { useState } from 'react';
import { ButtonGroup, Button, Card, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import { useGetPokemon } from '../../hooks/useGetPokemon';
import { PokemonSlideshow } from '../pokemon-slideshow/pokemon-slideshow';
import { PokemonSearch } from '../pokemon-search/pokemon-search';
import './pokemon-cards.less';

export const PokemonCards = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { handleSearch, allPokemon, page, setPage, total, loading } = useGetPokemon({ limit: 20 });


  return (
    <div className="pokemon-app">
      <PokemonSearch setSearchTerm={setSearchTerm} handleSearch={handleSearch} searchTerm={searchTerm} />
      <PokemonSlideshow allPokemon={allPokemon} />

      <div className="pokemon-grid">
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner">Loading Pokémon...</div>
          </div>
        ) : (
          allPokemon.map((poke) => (
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
          ))
        )}
      </div>
      {!searchTerm && (
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
      )}
    </div>
  );
};