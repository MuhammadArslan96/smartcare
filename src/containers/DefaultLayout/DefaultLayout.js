import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import firebase from '../../config/index'
import {getCurrentUser,getUsers} from '../../actions/userAction'

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';
// import { connect } from 'http2';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

const log = console.log
class DefaultLayout extends Component {

  state = {
    isUser : undefined
  }

  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getUsers()

    
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    log(this.state.isUser)
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <DefaultHeader onLogout={e=>this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
            <AppSidebarNav navConfig={navigation} {...this.props} router={router}/>
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                {/* <p>hello</p> */}
                <Switch>
                  {
                  // this.props.loading === false ? "Loading..." :
                  this.props.isAuthenticated === true ?
                  routes.map((route, idx) => {
                    return   this.props.is_admin === true ||
                     this.props.currentUser?.isApproved === true ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : <p> {this.props.loading===true ?  this.loading() : this.props.currentUser?.isApproved === false ?
                       "Not Approved" : void 0 }  </p> 
                       ;
                      }) :
                      <Redirect to='/login' />

                }
                  <Redirect from="/" to="/home" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  log(state)
  return {
    currentUser : state.users.currentUser,
    is_admin : state.users.is_admin,
    loading : state.users.loading,
    isAuthenticated : state.users.isAuthenticated,
    
  }
}
export default connect(mapStateToProps,{getCurrentUser,getUsers})(DefaultLayout);
