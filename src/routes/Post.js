import React from 'react'
class Post extends React.Component {
  
  render() {
    console.log(this.props);
    return <div className="Post">this is the Post component
      <h1>this is the slug: {this.props.match.params.slug}</h1>
    </div>
  }
}
export default Post