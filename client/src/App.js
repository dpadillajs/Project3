import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Firebase from "./config/Firebase";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import NoMatch from "./pages/NoMatch";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "David"
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Firebase.auth().onAuthStateChanged(user => {
      // console.log(user);

      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.user ? (
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/recipe/:id" component={Recipe} />
              <Route component={NoMatch} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route component={NoMatch} />
            </Switch>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
