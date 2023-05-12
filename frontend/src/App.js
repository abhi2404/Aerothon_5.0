import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Login from './Screens/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterScreen from "./Screens/Register";
import { useState } from "react";
import ToolScreen from "./Screens/ToolScreen";
import AeroParts from "./Screens/AeroParts";
function App() {

  const [auth, setAuth] = useState(false);

  return (
    <div className='App'>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={() => <Banner />} />
            <Route exact path='/login' component={() => <Login setAuth={setAuth} />} />
            <Route exact path='/register' component={() => <RegisterScreen />} />
            <Route exact path='/tools' component={() => <ToolScreen />} />
            <Route exact path='/aeroparts' component={() => <AeroParts />} />
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
