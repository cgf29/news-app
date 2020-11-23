import React from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router'
import { GlobalNews, SpecificNews } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path={['/']} component={GlobalNews}/>
        <Route  path={['/country=:id&category=:id']} component={GlobalNews}/>
        <Route  path={['/q=:id']} component={GlobalNews}/>
        <Route exact path='/specific-news' component={SpecificNews}/>
      </Switch>
    </div>
  );
}

export default App;
