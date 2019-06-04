import React from "react";

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends React.Component {
  constructor(props) {
    super(props);

    // console.log('inside context');
    // console.log(props.slug);

    this.state = {
      posts : []      
    };
  }
 
  componentDidMount(){
    console.log('xxxx');
    // this.setState({
    //   posts : ['title','title2']
    // })
  }


  render() {
    return (
      <storeContext.Provider value={this.state}>
        {this.props.children}
      </storeContext.Provider>
    );
  }
}