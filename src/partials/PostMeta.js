import React from 'react'; 
import Moment from 'react-moment';
import WithConsumer from '../context/WithConsumer';

const PostMeta = ({index,context}) => {
 
    const posts = () => context.posts;
    const item = posts()[index];
     
    let theMeta = ''; 
    if(item.type == 'post'){
        theMeta = (<div className="post-meta">
        Published:  <Moment format="MM/DD/YYYY">{item.date}</Moment>, 
        Written by {item.author_name}, Under {item.category_name}
        </div>)
    }

    return theMeta;

};
export default WithConsumer(PostMeta);