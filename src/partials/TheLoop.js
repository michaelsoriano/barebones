import React from 'react'; 
import WithConsumer from '../context/WithConsumer';
import ThePost from './ThePost';

const TheLoop = ({ context }) => {

    const posts = () => context.posts;
    const pos = posts();
  
    let results = '';

    if(pos.length === 0){
      results = <div>no results</div>;
    }else{
      results = pos.map(function(item,i){
           return <ThePost key={i} index={i}></ThePost>
         })
    }

    return (results);

};
export default WithConsumer(TheLoop);