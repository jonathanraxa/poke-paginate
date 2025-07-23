import { useState } from 'react';
import { Button } from 'react-bootstrap';

import './pokemon-slideshow.less';

export const PokemonSlideshow = ({ allPokemon }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        if (currentImage < allPokemon.length - 1) {
            setCurrentImage(currentImage + 1);
        }
    }

    const handlePrevious = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }
    }

    return (
        <div className='image-container'>
            <Button
                onClick={handlePrevious}
                disabled={currentImage === 0}
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
                disabled={currentImage === allPokemon.length - 1}
                variant='primary'
            >
                Next
            </Button>
        </div>
    );
};