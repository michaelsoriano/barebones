import React from 'react';
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context'

const Post = (props) => { 
  
  return (
    <Provider slug={props.match.params.slug}>
    <div className="Post">
      <Head></Head>
      <TheLoop></TheLoop>
      <Foot></Foot>
    </div>
    </Provider>
  )    
 
}
export default Post