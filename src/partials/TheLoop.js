import React from 'react'; 
import WithConsumer from '../context/WithConsumer';

const TheLoop = ({ context }) => {

    // console.log(context);

    const posts = () => context.posts;
    const pos = posts();
  
    return (
       pos.map(function(item,i){
         return <div key={i}>{item}</div>
       })
    );

    


};
export default WithConsumer(TheLoop);