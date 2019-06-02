import React from 'react';
import Head from '../partials/Head';
import Foot from '../partials/Foot';

class Page extends React.Component {
  
  render() {     
    return (
      <div className="Page">
        <Head></Head>
        this is the page component
        <h1>this is the slug: {this.props.match.params.slug}</h1>
        <Foot></Foot>
      </div>
    )
  }
}
export default Page