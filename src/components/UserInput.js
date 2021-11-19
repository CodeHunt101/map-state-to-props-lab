import React, { useState, Component } from "react"
import { connect } from 'react-redux'

// function UserInput({dispatch}) {
//   const [userForm, setUserForm] = useState({
//     username: '',
//     hometown: ''
//   })

//   let handleInputChange =(event)=> {
//     setUserForm({
//       [event.target.id]: event.target.value
//     });
//   }

//   let handleOnSubmit=(event)=> {
//     event.preventDefault();
//     dispatch({ type: 'ADD_USER', user: userForm });
//   }

  
//   return(
//     <form onSubmit={handleOnSubmit}>
//       <p>
//         <input
//           type="text"
//           id="username"
//           onChange={handleInputChange}
//           placeholder="username"
//         />
//       </p>
//       <p>
//         <input
//           type="text"
//           id="hometown"
//           onChange={handleInputChange}
//           placeholder="hometown"
//         />
//       </p>
//       <input type="submit" />
//     </form>
//   )
  
// }

// export default connect()(UserInput);

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_USER', user: this.state})
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect()(UserInput);
