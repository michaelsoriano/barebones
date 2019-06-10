import React from 'react'
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Pager from '../partials/Pager';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context';

const Archive = (props) => {  

  return (
    <Provider match={props.match} >
    <div className="home archive">
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
export default Archive