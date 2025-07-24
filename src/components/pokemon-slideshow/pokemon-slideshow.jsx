import { useState } from 'react';
import { Button } from 'react-bootstrap';

import './pokemon-slideshow.less';

export const PokemonSlideshow = ({ allPokemon }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const totalPokemon = allPokemon.length;

    const handleNext = () => {
        setCurrentImage((currentImage + 1) % totalPokemon);
    }

    const handlePrevious = () => {
        setCurrentImage((currentImage - 1 + totalPokemon) % totalPokemon);
    }

    return (
        <div className='image-container'>
            <Button
                onClick={handlePrevious}
                variant='primary'
            >
                Previous
            </Button>
            <div>
                <img src={allPokemon[currentImage]?.img} alt="pokemon" />
                <div className='pokemon-name'>{allPokemon[currentImage]?.name}</div>
            </div>
            <Button
                onClick={handleNext}
                variant='primary'
            >
                Next
            </Button>
        </div>
    );
};