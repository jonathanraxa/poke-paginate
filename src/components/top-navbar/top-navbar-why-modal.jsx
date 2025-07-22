import { Container, Nav, Navbar, Modal, Button } from 'react-bootstrap';

export const TopNavbarWhyModal = ({ showModal, handleClose }) => {
    return (
        <Modal show={showModal} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Why Did I Make This?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="why-content">
                    <h5>React & API Integration</h5>
                    <p>
                        This project was created to practice and demonstrate my skills with React,
                        modern JavaScript, and API integration. I wanted to build something fun
                        and interactive that showcases clean code practices and responsive design.
                    </p>

                    <h5>PokeAPI Exploration</h5>
                    <p>
                        The PokeAPI is a fantastic free API that provides comprehensive data about
                        Pokémon. It's perfect for learning how to work with REST APIs, handle
                        pagination, and manage state in React applications.
                    </p>

                    <h5>Key Features Implemented</h5>
                    <ul>
                        <li>Responsive card layout with CSS Grid/Flexbox</li>
                        <li>Pagination with Bootstrap components</li>
                        <li>Real-time search functionality</li>
                        <li>Loading states and error handling</li>
                        <li>Modern UI with hover effects and animations</li>
                        <li>Mobile-friendly design</li>
                    </ul>

                    <h5>Technical Stack</h5>
                    <ul>
                        <li><strong>Frontend:</strong> React with Hooks</li>
                        <li><strong>Styling:</strong> Bootstrap + Custom CSS</li>
                        <li><strong>API:</strong> PokeAPI (pokeapi.co)</li>
                        <li><strong>Build Tool:</strong> Vite</li>
                    </ul>

                    <h5>Needed Improvements</h5>
                    <ul>
                        <li>Pagination should not be done client side, but server side</li>
                        <li>Add a loading state for the search</li>
                    </ul>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
