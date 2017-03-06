import React, { Component } from 'react';
import MainNav from './components/MainNav';
import HomeContainer from './components/HomeContainer';
import Footer from './components/Footer';

class App extends Component {
  render() {
    const styles = {
      main: {
        minHeight: 'calc(100vh - 170px)'
      }
    };

    return (
      <div>
        <MainNav />
        <main style={styles.main}>
          <HomeContainer />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
