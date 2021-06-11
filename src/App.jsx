import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// imports components
import Header from "./components/Header.jsx";

//Component---Before that, it was class instead of function
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home"></Route>
          <Route path="/checkout">checkout</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
