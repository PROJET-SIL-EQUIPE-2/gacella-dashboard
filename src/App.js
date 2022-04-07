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
import DecideursProfilesGestionRoute from "./Routes/DecideursProfilesGestion/DecideursProfilesGestion.Route";
import ResetPasswordRoute from "./Routes/Reset Password/resetPassword.Route";
import {Redirect} from "react-router";
import SnackBarCompounent from "./ui-component/SnackBar/snackBar.Compounent";


function App() {
    const customization = useSelector((state) => state.templateSettings);

    function PrivateRoute({ Component, ...rest }) {
        return (
            <Route
                {...rest}
                render={({ location }) =>
                    localStorage.getItem("gacela-token") ? (
                        <Component/>
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        );
    }

    return (
      <React.Fragment>
          <StyledEngineProvider injectFirst>
              <ThemeProvider theme={themes(customization)}>
                  <CssBaseline/>
                  <NavigationScroll>
                      <Sidebar>
                          <Switch>
                              <PrivateRoute exact path="/" component={()=>null} />
                              <PrivateRoute exact path="/home" component={()=><HomeRoute/>} />
                              <PrivateRoute exact path="/locataires_requests" component={()=><LocatairesSignUpRequestsRoute/>} />
                              <PrivateRoute exact path="/decideurs_profiles" component={()=><DecideursProfilesGestionRoute/>} />
                              <PrivateRoute exact path="/contact" component={()=><ContactRoute/>} />
                              <Route exact path="/login" component={()=><Login/>} />
                              <Route exact path="/login/reset-password" component={()=><ResetPasswordRoute/>} />


                              {/*<Route exact path="/newpath" component={()=><Contact/>} />*/}
                          </Switch>
                          <SnackBarCompounent/>
                      </Sidebar>
                  </NavigationScroll>
              </ThemeProvider>
          </StyledEngineProvider>
      </React.Fragment>
  );
}

export default App;
