import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import HowWeWorkPage from './pages/HowWeWork';
import SectorsPage from './pages/Sectors';
import InnovationPage from './pages/Innovation';
import ContactPage from './pages/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main className="container" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/quienes-somos" component={AboutPage} />
          <Route path="/servicios" component={ServicesPage} />
          <Route path="/como-trabajamos" component={HowWeWorkPage} />
          <Route path="/sectores" component={SectorsPage} />
          <Route path="/innovacion" component={InnovationPage} />
          <Route path="/contacto" component={ContactPage} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;