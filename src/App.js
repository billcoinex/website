import Homepage from './containers/homepage/index';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CoinDetails from '../src/components/coinDetails/index'


function App() {
  return (
    // <Homepage/>
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/coinDetails" component={CoinDetails}></Route>
        <Route path="/" component={Homepage}></Route>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;