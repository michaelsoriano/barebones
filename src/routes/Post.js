import React from 'react';
import Head from '../partials/Head';
import Foot from '../partials/Foot';

class Post extends React.Component {
  
  render() {    
    return (
      <div className="Post">
        <Head></Head>
        this is the Post component
        <h1>this is the slug: {this.props.match.params.slug}</h1>
        <Foot></Foot>
      </div>
    )
    
  }
}
export default Post