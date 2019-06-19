import React from 'react'; 
import WithConsumer from '../context/WithConsumer';

const SearchForm = ({ context }) => {

    const ct = () => context.term;
    const term = ct();

    let searchInput =  React.createRef(); 

    function submitSearch (e){
        e.preventDefault();    
        context.submitSearch();
    }

    function updateTerm (){
        context.updateTerm(searchInput.current.value);
    }

    return (<form className="searchForm">        
                <input onChange={updateTerm} ref={searchInput} value={term}></input>
                <button onClick={submitSearch}>Submit</button>
            </form>);

};
export default WithConsumer(SearchForm);