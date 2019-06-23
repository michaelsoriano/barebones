import React from 'react';
import WithConsumer from '../context/WithConsumer';

function CommentForm({context}){    
    
    let errors = [];

    const contextFields = () => context.commentFields;
    const fields = contextFields();      
    
   
    function updateCommentData (event) {       
        let key = event.target.name; 
        let val = event.target.value;
        context.updateCommentFields(key,val)
    }

    function submitComment (e){
        e.preventDefault();
        if(formValid()){
            context.submitComment();  
        } 
    }

    function validURL(str) {
        //https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    function emailIsValid (email) {   
        //https://tylermcginnis.com/validate-email-address-javascript/          
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    function formValid(){
        
        errors = [];
        context.updateCommentErrors(errors);
        
        if(!fields.fullName){
            errors.push('Full name is empty');
        }
        if(!emailIsValid(fields.email)){            
            errors.push('Email is empty or invalid');             
        }
        if(fields.website){            
            if(!validURL(fields.website)){
                errors.push('Website url invalid');
            }            
        }
        if(!fields.comment){
            errors.push('Comment is empty');
        }
        if(errors.length > 0){  
            context.updateCommentErrors(errors);
            return false;
        }else{
            return true;
        }
    }    
    
    function Errors (){   
        let errors = context.commentErrors;        
        return (     
            <ul className="error-list">
                {errors.map(function(item,i){
                    return <li key={i}>{item}</li>
                })}
            </ul>
            );
    }

    return (
        <div className="comment-form">
            <Errors></Errors>
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

 