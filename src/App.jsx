import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Search from "./Search";
import ProfileSettings from "./ProfileSettings";
import MyPet from "./MyPet";
import AddPet from "./AddPet";
import AdminPet from "./AdminPet";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "./AuthContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#85DCB", color: "#85DCB" }}>
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
          <PrivateRoute exact path="/AdminPet" component={AdminPet}>
            <AdminPet />
          </PrivateRoute>
          <PrivateRoute
            exact
            path="/ProfileSettings"
            component={ProfileSettings}
          ></PrivateRoute>
          <PrivateRoute exact path="/AddPet" component={AddPet}></PrivateRoute>

          <Route>
            <ul>
              <li>
                <Link to="/MyPet">MyPet</Link>
              </li>
              <li>
                <Link to="/AddPet">AddPet</Link>
              </li>
              <li>
                <Link to="/ProfileSettings">Profile Settings</Link>
              </li>
              <li>
                <Link to="/SearchPage">Search</Link>
              </li>
              <li>
                <Link to="/AdminPet">AdminPet</Link>
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
