import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';
// import FetchPeople from './FetchPeople';
import People from './People';
import Person from './Person';


class App extends Component {
  render() {
    return (
      <Segment basic>
        <NavBar />
        <Flash />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/person/:id' component={Person} />
            <Route exact path='/people' component={People} />
            <Route component={NoMatch} />
          </Switch>
      </Segment>
    );
  }
}

export default App;
