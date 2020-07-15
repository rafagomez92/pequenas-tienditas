import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Header from './components/Header'


const App = () => {
  return(
      <Router>
        <div>
          <Header />        
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>              
              <Route path="/projects" component={Projects}/>              
              <Route path="/contact" component={Contact}/>              
              <Route component={NotFound}/>
          </Switch>
        </div>                    
      </Router>
  );
  
          
}

export default App;