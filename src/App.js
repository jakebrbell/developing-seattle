import React, { Component } from 'react';
import MainNav from './components/MainNav';
import HomeContainer from './components/HomeContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <main style={{ minHeight: 'calc(100vh - 170px)' }}>
          <HomeContainer />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
