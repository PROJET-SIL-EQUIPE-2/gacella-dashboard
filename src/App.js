import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import React from "react";
import HomeRoute from "./Routes/Home/Home.Route";
import ContactRoute from "./Routes/Contact/Contact.Route";
import AmsRoute from "./Routes/Ams/Ams.Route";
//import {AccessAlarm , Adjust} from "@mui/icons-material";
import Sidebar from "./SideBar";
import themes from "./themes";
import {CssBaseline, StyledEngineProvider, ThemeProvider} from "@mui/material";
import {useSelector} from "react-redux";
import NavigationScroll from "./SideBar/NavigationScroll";
import Login from "./Routes/Login/Login.Route";
import LocatairesSignUpRequestsRoute from "./Routes/LocatairesSignUpRequests/LocatairesSignUpRequests.Route";
import Verrouillage from "./Routes/gestionverou/Verrouillage.Route"

import DecideursProfilesGestionRoute from "./Routes/DecideursProfilesGestion/DecideursProfilesGestion.Route";

import ResetPasswordRoute from "./Routes/Reset Password/resetPassword.Route";
import {Redirect} from "react-router";
import SnackBarCompounent from "./ui-component/SnackBar/snackBar.Compounent";
import CarsViewRoute from "./Routes/CarsView/carsView.Route";
import LocataireDemandesDeverouillage from "./Routes/DemandeDeverouillage/demandesDeverrouillage.Route";


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
                              <PrivateRoute exact path="/verouillage" component={()=><Verrouillage/>} />
                              <PrivateRoute exact path="/contact" component={()=><ContactRoute/>} />
                              <PrivateRoute exact path="/cars-view" component={()=><CarsViewRoute/>} />

                              <PrivateRoute exact path="/decideurs_profiles" component={()=><DecideursProfilesGestionRoute/>} />
                              <PrivateRoute exact path="/Agents_de_maintenance" component={()=><AmsRoute/>} />

                              <Route exact path="/login" component={()=><Login/>} />
                              <Route exact path="/login/reset-password" component={()=><ResetPasswordRoute/>} />
                              <Route exact path="/DemandeDeverouillage" component={()=><LocataireDemandesDeverouillage/>} />

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
