import React from 'react';
import WithConsumer from '../context/WithConsumer';

function CommentForm({context}){    
    
    // const comments = () => context.comments;
    // const commentsList = comments();
    // let commentsTitle = <h2>{commentsList.length} Comment(s)</h2>;

    return (
        <div className="comment-form">
            <form>
                <label htmlFor="fullname">Full name</label>
                <input type="text" name="fullName"></input>
                <label htmlFor="email">Email</label>
                <input type="text" name="email"></input>
                <label htmlFor="website">Website</label>
                <input type="text" name="website"></input>
                <label htmlFor="comment">Comment</label>
                <textarea name="comment"></textarea>
                <button type="submit">Submit</button>
            </form>
            
        </div>
        )
}
export default WithConsumer(CommentForm);