import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import React from "react";
import HomeRoute from "./Routes/Home/Home.Route";
import ContactRoute from "./Routes/Contact/Contact.Route";
import {AccessAlarm , Adjust} from "@mui/icons-material";


function App() {
  return (
      <React.Fragment>
        <h1 style={{color : "var(--main-beige)"}}>HEADER</h1>
          <Adjust/>
          <Switch>
            <Route exact path="/home" component={()=><HomeRoute/>} />
            <Route exact path="/contact" component={()=><ContactRoute/>} />

            {/*<Route exact path="/newpath" component={()=><Contact/>} />*/}

          </Switch>
        <h1>Footer</h1>
      </React.Fragment>
  );
}

export default App;
