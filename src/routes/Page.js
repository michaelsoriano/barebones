import React from 'react';
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context'

const Page = (props) => { 
  
  return (
    <Provider slug={props.match.params.slug} type={'page'}>
    <div className="Page">
      <Head></Head>
      <TheLoop></TheLoop>
      <Foot></Foot>
    </div>
    </Provider>
  )    
 
}
export default Page