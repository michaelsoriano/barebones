import React from 'react';
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context'
import CommentsList from '../partials/CommentList';

const Single = (props) => {  

  let comments = ''; 

  if(props.match.path === '/post/:slug'){
    comments = <CommentsList></CommentsList>
  }

  return (
    <Provider match={props.match} >
    <div className="Post">
      <Head></Head>
      <div className="content-area">
      <TheLoop></TheLoop>
      </div>
      {comments}
      <Foot></Foot>
    </div>
    </Provider>
  )    
 
}
export default Single