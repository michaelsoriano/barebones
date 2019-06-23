import React from 'react';
import WithConsumer from '../context/WithConsumer';

function CommentsList({context}){    
    
    const comments = () => context.comments;
    const commentsList = comments();
    let commentsTitle = <h2>{commentsList.length} Comment(s)</h2>;

    return (
        <div className="comments-list">
            {commentsTitle}
            {commentsList.map(function(item,i){
                return (
                <div className="comment" key={i}>
                    <div class="comment-waiting">{item.waiting}</div>
                    {item.author_name} says:              
                    <div dangerouslySetInnerHTML={{__html:item.content.rendered}}></div>
                </div>
                )
                
            })}
        </div>
        )
}
export default WithConsumer(CommentsList);