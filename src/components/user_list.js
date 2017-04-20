import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return(
      <div className="col-md-4" key={ user.name }>
        <h4 className="page-header">{ user.name }</h4>
        <p className="card-tex">{ user.company.name }</p>
        <a className="btn btn-primary" href={user.website}>Website</a>
      </div>
    )
  }

  render() {
    return(
      <div>
        { this.props.users.map(this.renderUser) }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, actions)(UserList);
