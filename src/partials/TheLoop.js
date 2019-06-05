import React from 'react'; 
import WithConsumer from '../context/WithConsumer';
import Item from '../partials/Item';

const TheLoop = ({ context }) => {

    const posts = () => context.posts;
    const pos = posts();
  
    return (
       pos.map(function(item,i){
         return <Item key={i} index={i}></Item>
       })
    );

};
export default WithConsumer(TheLoop);