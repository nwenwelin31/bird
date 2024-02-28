import { Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import Home from './Home';
import BirdList from './BirdList';
import 'bootstrap/dist/css/bootstrap.min.css';
import BirdDetail from './BirdDetail';
import NotFound from './NotFound';


function App() {
  return (
  <Router>
    <div className="container">
      <Navbar/>
      <div>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/birdList'>
                <BirdList/>
            </Route>
            <Route path='/birds/:id'>
                <BirdDetail/>
            </Route>
            <Route path='*'>
                <NotFound/>
            </Route>
        </Switch>
      </div>
  </div>
</Router>

    
  );
}

export default App;
