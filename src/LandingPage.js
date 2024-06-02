import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Dirt Exchange</h1>
        <p>Find or list dirt to exchange in your area</p>
      </header>
      <section className="main-content">
        <div className="card">
          <h2>List Your Dirt</h2>
          <p>Have some dirt to get rid of? List it here and find someone who needs it.</p>
          <button>List Now</button>
        </div>
        <div className="card">
          <h2>Find Dirt</h2>
          <p>Looking for dirt? Browse listings to find free dirt near you.</p>
          <button>Browse Listings</button>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
