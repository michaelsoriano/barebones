import React from 'react'; 
import { Link } from 'react-router-dom';
import SearchForm from '../partials/SearchForm';

function Head(){
    return (<div className="header">
            <Link to="/">Home</Link>
            <SearchForm></SearchForm>
            </div>)
}
export default Head;