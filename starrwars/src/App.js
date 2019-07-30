import React from 'react';
import Api from './components/Api';
import Search from './components/Search';
import Display from './components/display';
import SearchError from './components/searchError';
import './App.css';

class App extends React.Component {
  state = {
    search:'',
    results: null
  };
  validateInputs(term){
    if(!term || term === '' || term=== ' '){
      throw new Error('no inputs');
    }
    if(typeof term !== 'string'){
      throw new Error('input not a string');
    }
  }
  handleSearch = (term)=>{
    this.validateInputs(term);
    console.log('term is ',term)
    Api.doFetch(Api.endPoint + 'people?search=' + term)
      .then(obj=>{
        console.log(obj);
        this.setState(
          {
            search:term,
            results:[...obj.results]
          });
      }).catch(err=>alert(err));
  }
  render(){
  return (
    <div className="App container">
      <SearchError>
        <Search search={this.handleSearch}/>
      </SearchError>
      <Display results = {this.state.results}/>
    </div>
  );
  }
}

export default App;
