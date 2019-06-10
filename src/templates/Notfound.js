import React from 'react';
import Head from '../partials/Head';
import Foot from '../partials/Foot';

class NotFound extends React.Component {
  render() {
    return (
      <div className="notfound">
        <Head></Head>
        <div className="content-area">
        <h1>Not Found</h1>
        </div>
        <Foot></Foot>
      </div>
    )
  }
}
export default NotFound