import React from 'react';
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context'
import CommentList from '../partials/CommentList';
import CommentForm from '../partials/CommentForm';

const Single = (props) => {  

  let comments = ''; 
  let commentsForm = '';

  if(props.match.path === '/post/:slug'){
    comments = <CommentList></CommentList>; 
    commentsForm = <CommentForm></CommentForm>;
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