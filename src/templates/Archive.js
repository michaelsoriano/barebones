import React from 'react'
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Pager from '../partials/Pager';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context';

const Archive = (props) => {  
  
  let pageTitle = props.match.path === '/search/:term' ? 'Search Results' : '';

  return (
    <Provider router={props} >
    <div className="archive">
      <Head></Head>
      <div className="content-area">
      <h1>{pageTitle}</h1>
      <TheLoop></TheLoop>
      <Pager></Pager>
      </div>
      <Foot></Foot>
    </div>
    </Provider>
  )    
 
}
export default Archive