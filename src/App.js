
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom'
import Create from './Create'
import CvDetails from './CvDetails';
import NotFound from './NotFound';

function App() {
  return (
    <> 
    <Router>
        <Navbar/>
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/create">
        <Create />
      </Route>
      <Route exact path="/cv/:id">
       <CvDetails/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route >
       </Switch>
      </Router>
    
    </>
  );
}

export default App;
