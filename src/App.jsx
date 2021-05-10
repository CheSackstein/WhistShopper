import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import ProfileSettings from "./Components/ProfileSettings";
import MyPet from "./Components/MyPet";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./Components/SearchPage";
import ProductsPage from "./Components/ProductsPage"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/Home" component={Home}></Route>
          <PrivateRoute
            exact
            path="/SearchPage"
            component={SearchPage}
          ></PrivateRoute>
          <PrivateRoute exact path="/MyPet" component={MyPet}></PrivateRoute>
          <Route exact path="/ProductsPage" component={ProductsPage}>
          </Route>
          <PrivateRoute
            exact
            path="/ProfileSettings"
            component={ProfileSettings}
          ></PrivateRoute>

          <Route>
            <ul>
              <li>
                <Link to="/MyPet">MyPet</Link>
              </li>
              <li>
                <Link to="/ProductsPage">Home</Link>
              </li>
              <li>
                <Link to="/ProfileSettings">Profile Settings</Link>
              </li>
              <li>
                <Link to="/SearchPage">Search</Link>
              </li>
              <li>
                <Link to="/Dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
