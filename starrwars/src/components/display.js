import React from 'react';
import Result from './results';
export default function Display(props){
  let results;
  if(props.results){
    results = props.results.map((result,index) => {
            return(<Result key={index} info={result}/>);
    });
  }
  return(<div className="container">
    {results || 'use the search'}
  </div>)
}