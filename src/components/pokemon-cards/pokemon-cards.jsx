import { ButtonGroup,  Button, Card, ListGroup } from 'react-bootstrap';
import { useGetPokemon } from '../../hooks/useGetPokemon';
import './pokemon-cards.less';


export const PokemonCards = () => {

  const { allPokemon, page, setPage, total } = useGetPokemon({ limit: 20 });
    console.log('all: ', allPokemon);
    return (
    <div className="card-container">
        <div className="pokemon-container">
          {allPokemon.map((poke) => {
            return (
            <Card style={{ width: '18rem' }}
            >
                <Card.Img variant="top" src={poke.img} />
                <Card.Body>
                    <Card.Title>{poke.name}</Card.Title>
                    <ListGroup className="list-group-flush">
                    {poke.stats.map((value) => (
                      <ListGroup.Item key={value.stat?.name}><strong>{value.stat?.name}</strong>: {value.base_stat}</ListGroup.Item>
                    )
                    )}

                    </ListGroup>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
             </Card>
            )
          })}
        </div>
        <ButtonGroup size="lg" className="mb-2 buttons">
        <Button 
            variant="outline-primary"
            onClick={() => setPage((prev) => Math.min(prev - 1))}
            disabled={page === total}
        >
            Previous
        </Button>
        <Button 
            variant="outline-primary"
            onClick={() => setPage((prev) => Math.min(prev + 1))}
            disabled={page === total}
        >
            Next
        </Button>
      </ButtonGroup>
      </div>
    )
}