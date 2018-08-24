import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/auth';

class Login extends Component {

    handleLogin(id) {
        const {dispatch} = this.props;
        dispatch(logIn(id));
    }

    render() {
        const {users} = this.props;

        return (
            <div> 
                {users.map((user) => (
                    <div key={user.id}
                         onClick={(e) => {this.handleLogin(user.id);}}
                    >
                        {user.name}
                        </div>
                ))}

            </div>
        )
    }
}



function mapStateToProps({users}, props) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)