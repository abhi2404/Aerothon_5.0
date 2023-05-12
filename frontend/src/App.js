import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Login from './Screens/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterScreen from "./Screens/Register";
import { useState } from "react";


function App() {

  const [auth, setAuth] = useState(false);

  const SetIsAuth = () => {
    setAuth(true);
  }

  return (
    <div className='App'>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={() => <Banner />} />
            <Route exact path='/login' component={() => <Login setauth={SetIsAuth} />} />
            <Route exact path='/register' component={() => <RegisterScreen />} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
