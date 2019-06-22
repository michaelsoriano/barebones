import React from 'react';
import WithConsumer from '../context/WithConsumer';

function CommentForm({context}){    
    
    // const comments = () => context.comments;
    // const commentsList = comments();
    // let commentsTitle = <h2>{commentsList.length} Comment(s)</h2>;

    return (
        <div className="comment-form">
            <form>
                <input type="text" name="fullName"></input>
                <input type="text" name="email"></input>
                <input type="text" name="website"></input>
                <textarea name="comment"></textarea>
                <button type="submit">Submit Comment</button>
            </form>
            
        </div>
        )
}
export default WithConsumer(CommentForm);