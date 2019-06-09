import React from 'react'
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Pager from '../partials/Pager';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context';

class Home extends React.Component {
  render() {
    return (
      <Provider type={'post'} route={'home'}>
      <div className="home">
          <Head></Head>
          <div className="content-area">
            <TheLoop></TheLoop>
            <Pager></Pager>
          </div>          
          <Foot></Foot>
      </div>
      </Provider>
    )
  }
}
export default Home