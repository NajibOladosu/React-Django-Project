import React, { useState, useEffect } from 'react';
import './index.css';
import profile from './about-visual.png'
import logo from './logo.png'
import favicon from './favicon.png'


function App() {

    const HomePage = () => {
        useEffect(() => {
          document.title = "Najib Oladosu's Project";
        }, []);
    }

    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Get user's current location
        if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            // Fetch weather data from the backend using the coordinates
            fetch(`http://127.0.0.1:8000/api/get-weather/?lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => setWeather(data))
            .catch(err => setError(err.message));
        }, (error) => {
            setError('Unable to retrieve your location');
        });
        } else {
        setError('Geolocation is not supported by your browser');
        }
    }, []);

    return(
        <>
            <title>Najib Oladosu's Project</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="description" content="HTML5 website template" />
            <meta name="keywords" content="global, template, html, sass, jquery" />
            <meta name="author" content="Najib Oladosu" />
            <link rel="stylesheet" href="index.css" />
            <link rel="icon" type="image/x-icon" href={favicon} />
            <header className="header">
                <a className="header--logo" href="/">
                <img src={logo} alt="Najib Oladosu" />
                </a>
                <a href="http://najib.mypressonline.com">
                <button className="header--cta cta">Hire Najib</button>
                </a>
                <div className='weather'>
                    <h3>Weather Information</h3>
                    {error && <p>Error: {error}</p>}
                    {weather ? (
                        <div>
                            <p>Location: {weather.name}</p>
                            <p>Temperature: {weather.main.temp} °C</p>
                            <p>Weather: {weather.weather[0].description}</p>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </header>
            <div className="intro">
                <div className="intro--banner">
                <h1>Hi there,</h1>
                <p>
                    I’m Najib Oladosu, a passionate web developer dedicated to creating
                    dynamic, user-friendly websites that stand out.
                </p>
                <p>
                    Let’s bring your digital vision to life with seamless design and
                    flawless functionality.
                </p>
                <p>
                    Ready to elevate your digital presence? Let's connect and embark on this
                    exciting adventure together!
                </p>
                <a href="http://najib.mypressonline.com">
                    <button id="about-me">
                    About Me
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 150 118"
                        style={{ enableBackground: "new 0 0 150 118" }}
                        xmlSpace="preserve"
                    >
                        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                        </g>
                    </svg>
                    <span className="btn-background" />
                    </button>
                </a>
                </div>
                <img src={profile}/>
            </div>
        </>

    );
};

export default App;