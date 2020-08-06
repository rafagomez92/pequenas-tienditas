import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Stores from './pages/Stores';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return(
      <Router>
        <div>
          <Header />        
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>              
              <Route path="/stores" component={Stores}/>              
              <Route path="/contact" component={Contact}/>              
              <Route component={NotFound}/>
          </Switch>
          <Footer/>
        </div>                    
      </Router>
  );
  
          
}

export default App;