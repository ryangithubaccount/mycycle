/*users.jsx*/
import React from "react";
/* We simply can use an array and loop and print each user */

// can be friends list + other ppl to add ! 
class SearchEngine extends React.Component {
  constructor(props){
      super(props);
      this.state = { search: '' };
  }

  handleChange = ({target}) => {
      this.setState({ [target.name]: target.value });
  };
  render(){
    return(
    <div>
      <label htmlFor="Search">Search</label>
      <input
        type="text"
        name="search"
        onChange={this.handleChange}
      />
    </div>
    );
  };
}
const UsersPage = () => {
  return (
    <div>
      <h3>
        Friends List :D
      </h3>
      <li>
        {["Laura", "Ryan", "Cindy", "Jacob"]}
      </li>
    
      <h3>
        People You May Know :0
      </h3>
        <SearchEngine/>
      <li>
        {["Tom", "Jerry", "Ben"]}
      </li>
    </div>
  );
};

export default UsersPage;
