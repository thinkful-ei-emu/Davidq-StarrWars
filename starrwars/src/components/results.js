import React from 'react';
import Api from './Api';
import '../styles/results.css';

export default class Results extends React.Component{
  constructor(props){
    super(props);
    this.state ={species : {}, homeworld : {}, loading:true};
    this.extraInfo=[];
  }
  componentDidMount(){
    Promise.all([Api.doFetch(this.props.info.species),Api.doFetch(this.props.info.homeworld)])
      .then(obj =>{
        this.setState({species:obj[0],homeworld:obj[1], loading:false});
      }); 
    for(let x in this.props.info)
      this.extraInfo.push(this.props.info[x]);

  }
  
  render(){
    

    return(
    <div className="result col-center">
        <h3>{this.props.info.name}</h3>
        {this.state.loading && <progress/>}
        <p>{this.state.species.name}</p>
        <p>{this.state.homeworld.name}</p>
        <p>{this.extraInfo.join(' ')}</p>
    </div>);
  }
}