import React from 'react';
import Head from '../partials/Head';
import TheLoop from '../partials/TheLoop';
import Foot from '../partials/Foot';
import {Provider} from '../context/Context'

const Post = (props) => { 
  let slug = props.match.params.slug
  let type = props.match.path === '/page/:slug' ? 'page' : 'post';

  return (
    <Provider slug={slug} type={type}>
    <div className="Post">
      <Head></Head>
      <div className="content-area">
      <TheLoop></TheLoop>
      </div>
      <Foot></Foot>
    </div>
    </Provider>
  )    
 
}
export default Post