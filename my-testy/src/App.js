// import logo from './logo.svg';
import './App.css';
import Pricing from './component/Pricing';
import Productlist from './component/Productlist';
import Paint from './component/paint';
import {BrowseRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pricing" component={Pricing} />
          <Route path="/productlist" component={Productlist} />
          <Route path="/paint" component={Paint} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
