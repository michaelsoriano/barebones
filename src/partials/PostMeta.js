import React from 'react'; 
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import WithConsumer from '../context/WithConsumer';

const PostMeta = ({index,context}) => {
 
    const posts = () => context.posts;
    const item = posts()[index];
    console.log(item);

    return (
        <div className="post-meta">
            Published:  <Moment format="MM/DD/YYYY">{item.date}</Moment>, 
        </div>);

};
export default WithConsumer(PostMeta);