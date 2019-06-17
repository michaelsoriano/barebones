import React from 'react';
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context'
import CommentsList from '../partials/CommentList';

const Single = (props) => {  

  let comments = ''; 
  let commentsForm = '';

  if(props.match.path === '/post/:slug'){
    comments = <CommentsList></CommentsList>; 
    commentsForm = 'Form here..';
  }

  return (
    <Provider router={props} >
    <div className="Post">
      <Head></Head>
      <div className="content-area">
      <TheLoop></TheLoop>
      </div>
      {comments}
      {commentsForm}
      <Foot></Foot>
    </div>
    </Provider>
  )    
 
}
export default Single