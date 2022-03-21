import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import React from "react";
import HomeRoute from "./Routes/Home/Home.Route";
import ContactRoute from "./Routes/Contact/Contact.Route";
import {AccessAlarm , Adjust} from "@mui/icons-material";
import Sidebar from "./SideBar";
import themes from "./themes";
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import NavigationScroll from "./SideBar/NavigationScroll";
import Login from "./Routes/Login/Login.Route";
import LocatairesSignUpRequestsRoute from "./Routes/LocatairesSignUpRequests/LocatairesSignUpRequests.Route";


function App() {
    const customization = useSelector((state) => state.templateSettings);

    return (
      <React.Fragment>
          <StyledEngineProvider injectFirst>
              <ThemeProvider theme={themes(customization)}>
                  <CssBaseline/>
                  <NavigationScroll>
                      <Sidebar>
                          <Switch>
                              <Route exact path="/home" component={()=><HomeRoute/>} />
                              <Route exact path="/locataires_requests" component={()=><LocatairesSignUpRequestsRoute/>} />
                              <Route exact path="/contact" component={()=><ContactRoute/>} />
                              <Route exact path="/login" component={()=><Login/>} />

                              {/*<Route exact path="/newpath" component={()=><Contact/>} />*/}

                          </Switch>
                      </Sidebar>
                  </NavigationScroll>
              </ThemeProvider>
          </StyledEngineProvider>
      </React.Fragment>
  );
}

export default App;
