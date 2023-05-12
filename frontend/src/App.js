import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Login from './Screens/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RegisterScreen from "./Screens/Register";


function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={() => <Banner />} />
            <Route exact path='/login' component={() => <Login />} />
            <Route exact path='/register' component={() => <RegisterScreen />} />
            <Route exact path='/tools' component={() => <ToolScreen />} />
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
