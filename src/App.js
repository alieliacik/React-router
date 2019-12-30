import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course'
import NoMatch from './components/NoMatch/NoMatch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='navlink'>
          <NavLink to='/courses'>Courses</NavLink>
          <NavLink to='/users'>Users</NavLink>
        </div>
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/courses' exact component={Courses} />
          <Route path='/courses/:courseId/:courseTitle' component={Course} />
          <Redirect from='/asd' to='/users' />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
