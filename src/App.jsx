
import { BrowserRouter as Router } from "react-router-dom";
// imports components
import Header from "./components/layout/Header.jsx";
import Main from "./components/layout/Main.jsx";
import Footer from "./components/layout/Footer";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
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
