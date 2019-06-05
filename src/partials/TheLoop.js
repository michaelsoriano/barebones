import React from 'react'; 
import WithConsumer from '../context/WithConsumer';
import ThePost from './ThePost';

const TheLoop = ({ context }) => {

    const posts = () => context.posts;
    const pos = posts();
  
    return (
       pos.map(function(item,i){
         return <ThePost key={i} index={i}></ThePost>
       })
    );

};
export default WithConsumer(TheLoop);