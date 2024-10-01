// src/App.js
import React from 'react';
import Lottie from 'react-lottie';
import './App.css';

// Import your Lottie animation JSON files
import airplaneAnimation from './animations/airplane.json'; // Example animation

function App() {
    const defaultOptionsAirplane = {
        loop: true,
        autoplay: true,
        animationData: airplaneAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="App">
            <header className="header">
                <Lottie options={defaultOptionsAirplane} height={300} width={300} className="lottie-animation" />
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
                    </div>
                    <div className="location-card">
                        <img src="https://source.unsplash.com/800x600/?mountain" alt="Mountain" />
                        <h3>Mountain Adventure</h3>
                    </div>
                    <div className="location-card">
                        <img src="https://source.unsplash.com/800x600/?forest" alt="Forest" />
                        <h3>Tropical Forest</h3>
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