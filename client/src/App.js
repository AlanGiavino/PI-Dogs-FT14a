import './App.css';
import React, { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';

import Landing from './containers/Landing/Landing';
import Home from './containers/Home/Home';
import CreateBreed from './containers/CreateBreed/CreateBreed';
import { useDispatch } from 'react-redux';
import { getBreeds, setLoading } from './Redux/Actions/index';
import About from './containers/About/About';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    dispatch(getBreeds());
  }, [dispatch])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />

        <Route path='/'>
          <Navbar />
          <Route exact path='/home' component={Home} />
          <Route exact path='/createBreed' render={() => <CreateBreed />} />
          <Route exact path='/about' component={About} />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
