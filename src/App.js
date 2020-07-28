import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';
import {
  ToastsContainer,
  ToastsStore,
  ToastsContainerPosition
} from "react-toasts";
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const Home = React.lazy(() => import('./views/Website/Home'));
const About = React.lazy(() => import('./views/Website/About'));
const Services = React.lazy(() => import('./views/Website/Services'));
const Blog = React.lazy(() => import('./views/Website/Blog'));
const Contact = React.lazy(() => import('./views/Website/Contact'));
const Appointments = React.lazy(() => import('./views/Website/appointment/appointments'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
          <ToastsContainer
            position={ToastsContainerPosition.TOP_CENTER}
            store={ToastsStore}
          />
            <Switch>
              <Route exact path="/" name="Home Page" render={props => <Home {...props}/>} /> 
              <Route exact path="/about" name="About Page" render={props => <About {...props}/>} /> 
              <Route exact path="/services" name="Services Page" render={props => <Services {...props}/>} /> 
              <Route exact path="/blog" name="Blog Page" render={props => <Blog {...props}/>} /> 
              <Route exact path="/contact" name="Contact Page" render={props => <Contact {...props}/>} /> 
              <Route exact path="/appointments" name="Appointments" render={props => <Appointments {...props}/>} /> 
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
