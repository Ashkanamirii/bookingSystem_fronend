import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "./components/layout/Main.jsx";

// imports components
import Header from "./components/layout/Header.jsx";

import { useState } from "react";
import Footer from "./components/layout/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";

//Component---Before that, it was class instead of function
function App() {
  const [userInformation, setUserInformation] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Router>
    </Provider>
  );
}

export default App;
