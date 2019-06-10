import React from 'react'; 
import { Link } from 'react-router-dom';
import WithConsumer from '../context/WithConsumer';

const ThePost = ({index,context}) => {
 
    const posts = () => context.posts;
    const item = posts()[index];

    let linkPrefix = context.type === 'page' ? '/page/' : '/post/'; 
    let theContent = context.route === '/' ? item.excerpt.rendered
        : item.content.rendered; 

    return (
        <div id={'post-id-'+item.id} className={'post-item'}>
            <h1><Link to={linkPrefix+item.slug}>{item.title.rendered}</Link></h1>
            <div className="post-content" dangerouslySetInnerHTML={{__html:theContent}}></div>
        </div>);

};
export default WithConsumer(ThePost);