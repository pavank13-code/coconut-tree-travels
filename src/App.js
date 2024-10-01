// src/App.js
import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">
                <h1>Coconut Tree Travels</h1>
                <p>Your Dream Destinations Await</p>
                <a href="#explore" className="explore-btn">Explore</a>
            </header>

            <section className="intro" id="explore">
                <h2>Exotic Locations</h2>
                <p>Discover beautiful destinations around the world with us.</p>
                <div className="locations">
                    <div className="location-card">
                        <img src="https://source.unsplash.com/800x600/?beach" alt="Beach" />
                        <h3>Beach Paradise</h3>
                        <p className="card-description">Relax in the sun and enjoy crystal-clear waters.</p>
                        <a href="#" className="learn-more-btn">Learn More</a>
                    </div>
                    <div className="location-card">
                        <img src="https://source.unsplash.com/800x600/?mountain" alt="Mountain" />
                        <h3>Mountain Adventure</h3>
                        <p className="card-description">Experience thrilling hikes and breathtaking views.</p>
                        <a href="#" className="learn-more-btn">Learn More</a>
                    </div>
                    <div className="location-card">
                        <img src="https://source.unsplash.com/800x600/?forest" alt="Forest" />
                        <h3>Tropical Forest</h3>
                        <p className="card-description">Explore lush greenery and diverse wildlife.</p>
                        <a href="#" className="learn-more-btn">Learn More</a>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2024 Coconut Tree Travels. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;