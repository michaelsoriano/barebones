import React from 'react'; 
import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';

const ThePost = ({index,context}) => {
 
    const posts = () => context.posts;
    const item = posts()[index];
    
    let linkPrefix = item.type === 'page' ? '/page/' : '/post/';     

    return (
        <div id={'post-id-'+item.id} className={'post-item'}>
            <h1><Link to={linkPrefix+item.slug}>{item.title.rendered}</Link></h1>
        </div>);

};
export default WithConsumer(ThePost);