import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Films extends React.Component {
  state = { films: [] }

  componentDidMount() {
    axios.get('https://swapi.co/api/films/')
      .then( res => {
        this.setState({ films: res.data.results })
        console.log(this.state.films)
      })
      .catch(err => {
        // console.log(err.response)
      })
  }

  render() {
    const { films } = this.state;
    return (
      <Container>
        <Header as='h1' textAlign='center'>Films Component</Header>
        { films[0] ?
        films.map((film) => {

        // START this allows me to find the correct film id for the actual APi call, but I don't know how to save it to use in the return Link.
          const urlEach = film.url.split("")
          urlEach.map((item, film) => {
            if (item > 0) {
              const id = item
              console.log(id)
              // this.showLink(id, film)
              // if I put the return and Link in this separate function nothing displays.
            }
            else
              null
          })
          //END
          
          return(
          <Link key={film.title} to={`/film/${film.title}`}>{film.title}<br /></Link>
          )
        })
        :
        null
        }
      </Container>
    );
  }
}

export default Films;

