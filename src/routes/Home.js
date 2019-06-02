import React from 'react'
import Head from '../partials/Head';
import Foot from '../partials/Foot';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
          <Head></Head>
          <h1>Home</h1>
          <Foot></Foot>
      </div>
    )
  }
}
export default Home