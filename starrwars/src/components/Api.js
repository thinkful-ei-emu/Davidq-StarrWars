export default class Api{
  static endPoint = 'https://swapi.co/api/';
  static doFetch(options){
    return fetch(options).then(resp =>{
      if(resp.ok)
        return resp.json();
      else
        return Promise.reject(new Error(resp.statusText));
    });
  }
}