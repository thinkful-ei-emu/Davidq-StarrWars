import React from 'react';

export default class SearchError extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hasError:false
    };
  } 
  static getDerivedStateFromError(error){
    return {hasError:true}
  }

  render(){
    if(this.state.hasError){
      return (<div>An unknown error has occured</div>);
    }
    return this.props.children;
  }
}