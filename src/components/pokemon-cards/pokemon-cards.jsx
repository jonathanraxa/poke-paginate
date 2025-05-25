import { Button, Card } from 'react-bootstrap';
import { useGetPokemon } from '../../hooks/useGetPokemon';
import './pokemon-cards.less';


export const PokemonCards = () => {

  const { pokemon, page, setPage, total } = useGetPokemon({ limit: 30 });

  
    return (
    <div className="card-container">
        <div className="pokemon-container">
          {pokemon.map((poke) => {
            return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{poke.name}</Card.Title>
                    <Card.Text>
                    details here...
                    </Card.Text>
                </Card.Body>
             </Card>
            )
          })}
        </div>
      <div className='buttons'>
        <Button 
            variant="primary"
            onClick={() => setPage((prev) => Math.min(prev - 1))}
            disabled={page === total}
        >
            Previous
        </Button>
        <Button 
            variant="primary"
            onClick={() => setPage((prev) => Math.min(prev + 1))}
            disabled={page === total}
        >
            Next
        </Button>
      </div>
       </div>
    )
}