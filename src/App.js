import { Route, BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';
import Home from './Home';
import BirdList from './BirdList';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/birdList'>
                <BirdList/>
            </Route>
            {/* <Route path='/blogs/:id'>
                <BlogDetails/>
            </Route>
            <Route path='*'>
                <NotFound/>
            </Route> */}
        </Switch>
      </div>
  </div>
</Router>
  );
}

export default App;
