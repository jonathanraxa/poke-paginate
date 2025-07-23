import { useState } from 'react';
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import { useAutocomplete } from '../../hooks/useAutocomplete';

import './pokemon-search.less';

export const PokemonSearch = ({
    setSearchTerm,
    handleSearch,
    searchTerm
}) => {
    const { autoCompleteList, handleFilterPokemon, setAutoCompleteList } = useAutocomplete();

    const handleInputOnChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value);
        handleFilterPokemon(e.target.value);
    }

    const handleItemClick = (item) => {
        setSearchTerm(item);
        handleSearch(item);
        setAutoCompleteList([]); // Clear the autocomplete list
    }

    return (
        <Container className="search-section">
            <Row className="justify-content-center">
                <Col md={6} lg={4}>
                    <div className="search-container">
                        <InputGroup className="search-input-group">
                            <InputGroup.Text className="search-icon">
                                🔍
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Search for a Pokémon..."
                                value={searchTerm ?? ''}
                                onChange={handleInputOnChange}
                                className="search-input"
                                size="lg"
                            />
                            {searchTerm && (
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => {
                                        setSearchTerm('');
                                        handleSearch('');
                                        setAutoCompleteList([]); // Clear autocomplete when clearing search
                                    }}
                                    className="clear-button"
                                >
                                    ✕
                                </Button>
                            )}
                        </InputGroup>

                        {autoCompleteList.length > 0 && (
                            <div className="auto-complete-container">
                                <div className="auto-complete-list">
                                    {autoCompleteList?.map((item) => (
                                        <div
                                            key={item}
                                            className="auto-complete-item"
                                            onClick={() => handleItemClick(item)}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}