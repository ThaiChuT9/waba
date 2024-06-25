// import logo from './logo.svg';
import './App.css';
import Pricing from './component/Pricing';
import Productlist from './component/Productlist';
import Paint from './component/paint';
import {BrowseRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  <Router>
    <Switch>
      <Route exact path="/" component={Productlist}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/paint" component={Paint}/>
    </Switch>
  </Router>
}

export default App;
