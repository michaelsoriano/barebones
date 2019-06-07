import React from 'react';
import Head from '../partials/Head';
import Foot from '../partials/Foot';

//will need to create a custom route:
//https://benrobertson.io/wordpress/wordpress-custom-search-endpoint

class Search extends React.Component {
  
  render() {     
    return (
      <div className="archive">
        <Head></Head>
        <div className="content-area">        
          <h1>Search term: {this.props.match.params.term}</h1>
        </div>          
        <Foot></Foot>
      </div>
    )
  }
}
export default Search