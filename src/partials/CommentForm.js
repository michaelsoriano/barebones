import React from 'react';
import WithConsumer from '../context/WithConsumer';

function CommentForm({context}){    
    
    const contextFields = () => context.commentFields;
    const fields = contextFields();  
   
    function updateCommentData (event) {       
        let key = event.target.name; 
        let val = event.target.value;
        context.updateCommentFields(key,val)
    }

    function submitComment (e){
        e.preventDefault();
        context.submitComment();
    }

    return (
        <div className="comment-form">
            <form>
                <label htmlFor="fullname">Full name</label>
                <input type="text" 
                    onChange={updateCommentData} 
                    value={fields.fullName} 
                    name="fullName"></input>
                <label htmlFor="email">Email</label>
                <input type="text"
                    onChange={updateCommentData} 
                    value={fields.email} 
                    name="email"></input>
                <label htmlFor="website">Website</label>
                <input type="text"
                    onChange={updateCommentData}
                    value={fields.website} 
                    name="website"></input>
                <label htmlFor="comment">Comment</label>
                <textarea 
                    name="comment" 
                    onChange={updateCommentData}
                    value={fields.comment}
                ></textarea>
                <button type="submit" onClick={submitComment}>Submit</button>
            </form>
            
        </div>
        )
}
export default WithConsumer(CommentForm);

 