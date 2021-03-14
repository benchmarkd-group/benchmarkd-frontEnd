import SearchBar from "material-ui-search-bar";
import { render } from "react-dom";
import { Component } from "react";
import '../SearchComponent/SearchComponent.css'
// *snip*
class SearchComponent extends Component{
    state = {
        
    };

 render(){
return (
    <div className='searchBarDiv'>
  <SearchBar className='searchBar'
    value={this.state.value}
    onChange={(newValue) => this.setState({ value: newValue })}
    onRequestSearch={() => doSomethingWith(this.state.value)}
/></div>
);
 
function doSomethingWith(s){
console.log(s);
}
 }
}
export default SearchComponent;