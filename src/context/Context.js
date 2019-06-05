import React from "react";
import Axios from "axios";

//context api:  
//https://medium.com/datadriveninvestor/getting-started-w-reacts-context-api-f60aa9be758f

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    
    console.log(props);
    this.state = {
      posts : [], 
      comments : []     
    };
  }
 
  componentDidMount(){
    
    let self = this;
    let url = '/wp-json/wp/v2/';
 
    
    switch(self.props.type){      
      case 'page': 
        url += 'pages/?slug=';
        url += self.props.slug
      break;
      case 'post': 
      default:      
        url += self.props.slug ? 'posts/?slug=' + self.props.slug : 'posts/';
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