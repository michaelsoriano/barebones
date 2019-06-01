import React from 'react'
class Search extends React.Component {
  
  render() {     
    return <div className="archive">this is search   
    <h1>this is the term: {this.props.match.params.term}</h1>
    </div>
  }
}
export default Search