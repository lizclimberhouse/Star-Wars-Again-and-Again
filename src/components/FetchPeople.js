import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getPeople } from '../actions/people';
import People from './People';
import Person from './Person';
import axios from 'axios';

class FetchPeople extends React.Component {
  state = { people: {}, person: {} }
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch(getPeople())
  // }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/')
      .then( res => {
        this.setState({ people: res.data.results })
        console.log(this.state.people)
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  callPerson = (id) => {
    axios.get(`https://swapi.co/api/people/${id}`)
      .then( res => {
        this.setState({ person: res.data })
        console.log(this.state.person)
        return(
        <Person person={this.state.person} />
        )
      })
      .catch(err => {
        console.log(err.response)
      })
  }

  render() {
    return (
      <div>
        { this.props.match.params.id ?
        // this.callPerson(this.props.match.params.id)
        this.callPerson(this.props.match.params.id)
        :
        <People people={this.state.people} />
        }
      </div>
    )
  }
}

export default FetchPeople;