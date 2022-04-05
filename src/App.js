import Navbar from './Nabar';
import Home from './Home';
import Create from './Create';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // react router
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
