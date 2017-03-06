import React, { Component } from 'react';
import MainNav from './components/MainNav';
import HomeContainer from './components/HomeContainer';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav />
        <main style={{ minHeight: 'calc(100vh - 170px)' }}>
          <HomeContainer />
        </main>
      </div>
    );
  }
}

export default App;
