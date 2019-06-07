import React from 'react';
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context'

const Page = (props) => { 
  let slug = props.match.params.slug; 
  
  return (
    <Provider slug={slug} type={'page'}>
    <div className="Page">
      <Head></Head>
      <div className="content-area">
      <TheLoop></TheLoop>
      </div>
      <Foot></Foot>
    </div>
    </Provider>
  )    
 
}
export default Page