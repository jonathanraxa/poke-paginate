import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import './pokemon-search.less';
export const PokemonSearch = ({
    setSearchTerm,
    handleSearch,
    searchTerm
}) => {
    const handleInnerSearch = (e) => {
        setSearchTerm(e.target.value);
        handleSearch(e.target.value);
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
                                onChange={handleInnerSearch}
                                className="search-input"
                                size="lg"
                            />
                            {searchTerm && (
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => {
                                        setSearchTerm('');
                                        handleSearch('');
                                    }}
                                    className="clear-button"
                                >
                                    ✕
                                </Button>
                            )}
                        </InputGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}