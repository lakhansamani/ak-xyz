import React, { Component } from 'react';
import './App.css';
import InvitationCard from './images/frame.jpg'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <img src={InvitationCard} className="invitation-card" alt="invitation-card" />
        <a href="https://goo.gl/maps/8TZ4rNTgc362" target="_blank" className="location-link" rel="noopener noreferrer">
          <i className="fas fa-map-marker-alt" /> &nbsp; The Grand Gayatri, Shubhanpura
        </a>
      </div>
    );
  }
}

export default App;
