import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchJoke } from '../actions';

// DEREFERENCED PROPS
const Joke = ({ title, joke, isFetching, error, fetchJoke }) => {

  useEffect( () => {
     fetchJoke();
  },[fetchJoke])
 
  return (
    <>
      <h2>Dad says: {joke}</h2>
      <button onClick={fetchJoke} >Get new quote</button>
    </>
  );
};

const mapStateToProps = (state) => {
   return {
      title: state.title,
      joke: state.joke,
      isFetching: state.isFetching,
      error: state.error
   }
}
// THIS IS WRONG - YOU DON'T NEED TO WRAP 
// const mapDispatchToProps = () => {
//    return { fetchJoke }
//  }
const mapDispatchToProps = { fetchJoke }

export default connect( mapStateToProps, mapDispatchToProps )(Joke);