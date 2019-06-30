import React from 'react'; 
import WithConsumer from '../context/WithConsumer';
import ThePost from './ThePost';

const TheLoop = ({ context }) => {

    const posts = () => context.posts;
    const pos = posts();
  
    let results = '';
     
    if(context.appError){
      results = <div className="app-error">{context.appError}</div>;      
    }else{
      if(pos.length === 0){
        results = <div className="no-results">no results</div>;
      }else{
        results = pos.map(function(item,i){
             return <ThePost key={i} index={i}></ThePost>
           })
      }
    }

    return (results);

};
export default WithConsumer(TheLoop);