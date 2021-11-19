import React, { Component } from 'react';
import { connect } from 'react-redux';

function Users({users}) {

  
  return (
    <div>
      <ul>
        Users!
        {users.map((user,idx) => <li key={idx} >{user.username}</li>)}
        {users.length}
      </ul>
    </div>
  )
  
}

//add mapStateToProps here
const mapStateToProps = ({users}) => {
  return {users: users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
