import React from "react";
import Axios from "axios";

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts : []      
    };
  }
 
  componentDidMount(){
    let self = this;
    Axios.get('/wp-json/wp/v2/posts').then((response)=>{
      self.setState({
        posts : response.data
      })
      console.log(response);
    }).catch();    
  }


  render() {
    return (
      <storeContext.Provider value={this.state}>
        {this.props.children}
      </storeContext.Provider>
    );
  }
}