import React from 'react'; 
import WithConsumer from '../context/WithConsumer';

const SearchForm = ({ context }) => {

    const ct = () => context.term;
    const term = ct(); 

    function submitSearch (e){
        e.preventDefault();    
        context.submitSearch();
    }

    function updateTerm (event){       
        context.updateTerm(event.target.value);
    }

    return (<form className="searchForm">        
                <input onChange={updateTerm} value={term}></input>
                <button onClick={submitSearch}>Submit</button>
            </form>);

};
export default WithConsumer(SearchForm);