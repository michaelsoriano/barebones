import React from 'react'; 
import WithConsumer from '../context/WithConsumer';

const Item = ({index,context}) => {
 
    const posts = () => context.posts;
    const item = posts()[index];

    return (<div 
        id={'post-id-'+item.id}>
            {item.title.rendered}
        </div>);

};
export default WithConsumer(Item);