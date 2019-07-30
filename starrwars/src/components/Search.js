import React from 'react';

export default function Search(props){
  return(
    <div>
      <form onSubmit={(e)=>{e.preventDefault();props.search(e.target.search.value);}}>
        <label htmlFor="search">Search</label>
        <input name="search" id="search" type="text"/>
        <button type="submit" >Search Your Feelings</button>
      </form>
    </div>
    );
}