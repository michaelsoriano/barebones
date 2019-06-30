import React from 'react'; 
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import WithConsumer from '../context/WithConsumer';

const PostMeta = ({index,context}) => {
 
    const posts = () => context.posts;
    const item = posts()[index];

    let catLink = '';

    if(item.categories){         
        catLink = (<span>
            Under <Link to={'/category/'+item.categories[0]}>{item.category_name}</Link>
        </span>);
    }

    let theMeta = ''; 
    if(item.type === 'post'){
        theMeta = (<div className="post-meta">
        Published:  <Moment format="MM/DD/YYYY">{item.date}</Moment>, 
        Written by {item.author_name}, {catLink}
        </div>)
    }

    return theMeta;

};
export default WithConsumer(PostMeta);