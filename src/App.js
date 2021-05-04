import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";
import ViewUser from "./User/ViewUser";

function App() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/users/add" component={AddUser} />
        <Route path="/viewuser/:id" component={ViewUser} />
        <Route path="/edituser/:id" component={EditUser} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
