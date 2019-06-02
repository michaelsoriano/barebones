import React from 'react';
import Head from '../partials/Head';
import Foot from '../partials/Foot';

class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <Head></Head>
        <h1>Not Found</h1>
        <Foot></Foot>
      </div>
    )
  }
}
export default NotFound