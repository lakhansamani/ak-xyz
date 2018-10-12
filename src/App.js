import React, { Component } from 'react';
import './App.css';
import InvitationCard from './images/frame.jpg'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <img src={InvitationCard} className="invitation-card" alt="invitation-card" />
      </div>
    );
  }
}

export default App;
