import React from 'react'
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context';

class Home extends React.Component {
  render() {
    return (
      <Provider type={'post'}>
      <div className="home">
          <Head></Head>
          <TheLoop></TheLoop>
          <Foot></Foot>
      </div>
      </Provider>
    )
  }
}
export default Home