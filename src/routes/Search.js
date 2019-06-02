import React from 'react';
import Head from '../partials/Head';
import Foot from '../partials/Foot';

class Search extends React.Component {
  
  render() {     
    return (
      <div className="archive">
        <Head></Head>
          this is search   
          <h1>this is the term: {this.props.match.params.term}</h1>
        <Foot></Foot>
      </div>
    )
  }
}
export default Search