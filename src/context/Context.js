import React from "react";
import Axios from "axios";

//context api:  
//https://medium.com/datadriveninvestor/getting-started-w-reacts-context-api-f60aa9be758f

const storeContext = React.createContext();
export const Consumer = storeContext.Consumer;

export class Provider extends React.Component {
  constructor(props) {
    super(props); 

    let type = 'post';     
    switch(props.router.match.path){
      case '/page/:slug':
        type = 'page';
        break;
      case '/search/:term':
        type = 'search';
        break;
      case '/post/:slug':
      default:
        type = 'post';
        break;
    }

    let slug = props.router.match.params.slug ? props.router.match.params.slug : ''; 
    let route = props.router.match.path;
    let term = props.router.match.params.term ? props.router.match.params.term : '';

    this.state = {
      term : term,
      slug : slug,
      type : type,
      route : route,
      posts : [], 
      comments : [],
      currentPage : 1, 
      totalPages : 0, 
      nextClicked : this.nextClicked.bind(this), 
      previousClicked : this.previousClicked.bind(this), 
      submitSearch : this.submitSearch.bind(this), 
      updateTerm : this.updateTerm.bind(this)       
    };
 
  }
 
  componentDidMount(){   
    this.getPosts(this.buildUrl());      
  }

  componentDidUpdate(prevProps){ 
    if(prevProps.router.location.pathname !== this.props.router.location.pathname){       
      this.getPosts(this.buildUrl()); 
    } 
  }

  updateTerm (term){
    this.setState({
      term : term
    })
  }

  submitSearch(){      
    this.setState({
      type : 'search',  
      currentPage : 1
    });

    this.props.router.history.push('/search/'+this.state.term);
  }

  buildUrl(){

    let url = '/wp-json/wp/v2/';    
    switch(this.state.type){      
      case 'page': 
        url += 'pages/?slug=';
        url += this.state.slug
      break;
      case 'search': 
        url += 'search/?s=';
        url += this.state.term;
        url += '&page=' + this.state.currentPage;
      break;      
      case 'post': 
      default:      
        url += this.state.slug ? 'posts/?slug=' + this.state.slug : 'posts/?page=' + this.state.currentPage;
        break;      
    }

    return url;
  }

  getComments(id){
    let url = '/wp-json/wp/v2/comments?post=' + id;
    let self = this;
    Axios.get(url).then((response)=>{       
      self.setState({
        comments : response.data 
      })      
    }).catch(function(error){
      console.log(error);
    }); 
  }

  getPosts (url){
    let self = this;
    Axios.get(url).then((response)=>{
      self.setState({
        posts : response.data, 
        totalPages : response.headers['x-wp-totalpages']
      },function(){          
        //get comments if post, and post array is not empty
        if(self.state.route === '/post/:slug' 
          && self.state.posts[0]){           
          self.getComments(self.state.posts[0].id);
        }  
      })      
    }).catch(function(error){
      console.log(error);
    });  
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