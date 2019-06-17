import React from 'react'; 
import WithConsumer from '../context/WithConsumer';

const SearchForm = ({ context }) => {

    let searchInput =  React.createRef(); 

    function submitSearch (e){
        e.preventDefault();
        context.submitSearch(searchInput.current.value);
    }


    return (<form>
                <input ref={searchInput}></input>
                <button onClick={submitSearch}>Submit</button>
            </form>);

};
export default WithConsumer(SearchForm);