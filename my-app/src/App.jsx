import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Search from "./Search";
import ProfileSettings from "./ProfileSettings";
import MyPet from "./MyPet";
import AddPet from "./AddPet";
import AdminPet from "./AdminPet";
import PrivateRoute from "./PrivateRoute";
import { useAuth } from "./AuthContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{backgroundColor:"#85DCB",color:"#85DCB"}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Search">
            <Search />
          </Route>
          <Route exact path="/MyPet">
            <MyPet />
          </Route>
          <PrivateRoute exact path="/AdminPet">
            <AdminPet />
          </PrivateRoute>
          <Route exact path="/ProfileSettings">
            <ProfileSettings />
          </Route>
          <PrivateRoute exact path="/AddPet">
            <AddPet />
          </PrivateRoute>

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
                <Link to="/Search">Search</Link>
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
