import React, { useEffect } from 'react'; 
import WithConsumer from '../context/WithConsumer';

const Pager = function ({context}){
 
    let prevBtn =  React.createRef(); 
    let nextBtn =  React.createRef(); 
    let curPage = () => context.currentPage;
    let totalPages = () => context.totalPages; 

    useEffect(() => {
        prevBtn.current.disabled = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]); 
    
    function nextClicked(){

        context.nextClicked(); 

        if(parseInt(totalPages()) === parseInt(curPage() + 1) ){
            nextBtn.current.disabled = true;
        }

        prevBtn.current.disabled = false;

    }

    function previousClicked(){

        context.previousClicked(); 

        if(parseInt(curPage()-1) === 1 ){
            prevBtn.current.disabled = true;
        }

        nextBtn.current.disabled = false;

    }


    return (
        <div className="Pager">
        <button ref={prevBtn} onClick={previousClicked}>Previous</button>
        <button ref={nextBtn} onClick={nextClicked}>Next</button>
        <div className="PagerText">Page 
            <span dangerouslySetInnerHTML={{__html: curPage()}}></span> of 
            <span dangerouslySetInnerHTML={{__html: totalPages()}}></span></div>
        </div>
    )
}

export default WithConsumer(Pager);