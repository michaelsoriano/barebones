import React from "react";
import Axios from "axios";

//context api:  
//https://medium.com/datadriveninvestor/getting-started-w-reacts-context-api-f60aa9be758f

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends React.Component {
  constructor(props) {
    super(props);
      
    this.state = {
      type : this.props.type,
      route : this.props.route,
      posts : [], 
      comments : [],
      currentPage : 1, 
      totalPages : 0, 
      nextClicked : this.nextClicked.bind(this), 
      previousClicked : this.previousClicked.bind(this)       
    };
 
  }
 
  componentDidMount(){
    this.getPosts(this.buildUrl());      
  }

  buildUrl(){

    let url = '/wp-json/wp/v2/';    
    switch(this.state.type){      
      case 'page': 
        url += 'pages/?slug=';
        url += this.props.slug
      break;
      case 'post': 
      default:      
        url += this.props.slug ? 'posts/?slug=' + this.props.slug : 'posts/?page=' + this.state.currentPage;
        break;      
    }

    return url;
  }


  getPosts (url){
    let self = this;
    Axios.get(url).then((response)=>{
      self.setState({
        posts : response.data, 
        totalPages : response.headers['x-wp-totalpages']
      },function(){
        console.log('after setstate...');
        console.log(self.state);
      })      
    }).catch();  
  }


  nextClicked (){ 
    let newPage = this.state.currentPage + 1;    
    this.setState({
      currentPage : newPage
    },function(){
      this.getPosts(this.buildUrl());
    })   
  }


  previousClicked (){
    let newPage = this.state.currentPage - 1;    
    this.setState({
      currentPage : newPage
    },function(){
      this.getPosts(this.buildUrl());
    })
  }


  render() {
    return (
      <storeContext.Provider value={this.state}>
        {this.props.children}
      </storeContext.Provider>
    );
  }
}