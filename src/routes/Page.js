import React from 'react'
class Page extends React.Component {
  
  render() {
    console.log(this.props);
    return <div className="Page">this is the page component
      <h1>this is the slug: {this.props.match.params.slug}</h1>
    </div>
  }
}
export default Page