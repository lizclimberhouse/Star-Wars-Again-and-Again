import axios from 'axios';

export const PEOPLE = 'PEOPLE';

export const getPeople = () => {
  return (dispatch) => {
    axios.get('https://swapi.co/api/people/')
      .then( res => dispatch({ type: PEOPLE, people: res.data.results }) )
  }
}