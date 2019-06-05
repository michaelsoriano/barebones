import React from "react";
import Axios from "axios";

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    
    console.log(props);
    this.state = {
      posts : []      
    };
  }
 
  componentDidMount(){
    let self = this;
    let url = '/wp-json/wp/v2/';

    switch(self.props.type){
      case 'post':       
        url += 'posts/?slug=';
        url += self.props.slug
        break;
      case 'page': 
        url += 'pages/?slug=';
        url += self.props.slug
      break;
      default:
      break;
    }


    Axios.get(url).then((response)=>{
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