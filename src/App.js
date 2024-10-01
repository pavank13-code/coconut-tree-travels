// src/App.js
import React from 'react';
import Slider from 'react-slick';
import Lottie from 'react-lottie';
import animationData from './animation.json'; // Your Lottie animation JSON file
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="App">
            <header className="header">
                <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
                <h1>Coconut Tree Travels</h1>
                <p>Your Dream Destinations Await</p>
                <a href="#explore" className="explore-btn">Explore</a>
            </header>

            <section className="carousel">
                <Slider {...settings}>
                    <div>
                        <img src="https://source.unsplash.com/1600x900/?beach" alt="Beach" className="carousel-image" />
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/1600x900/?mountain" alt="Mountain" className="carousel-image" />
                    </div>
                    <div>
                        <img src="https://source.unsplash.com/1600x900/?forest" alt="Forest" className="carousel-image" />
                    </div>
                </Slider>
            </section>

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

            <section className="services">
                <h2>Our Services</h2>
                <div className="service-icons">
                    <div className="service">
                        <i className="fas fa-plane fa-3x"></i>
                        <h3>Flight Booking</h3>
                        <p>Book your flights at the best prices.</p>
                    </div>
                    <div className="service">
                        <i className="fas fa-hotel fa-3x"></i>
                        <h3>Hotel Reservations</h3>
                        <p>Find and reserve your perfect accommodation.</p>
                    </div>
                    <div className="service">
                        <i className="fas fa-car fa-3x"></i>
                        <h3>Car Rentals</h3>
                        <p>Rent a car to explore your destination.</p>
                    </div>
                    <div className="service">
                        <i className="fas fa-utensils fa-3x"></i>
                        <h3>Local Cuisine</h3>
                        <p>Discover the local food and dining options.</p>
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