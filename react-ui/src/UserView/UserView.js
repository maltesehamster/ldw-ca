import React, { Component } from 'react';

import './UserView.css';

// [Domain]|[Page/Context]|ComponentName|[Type]
class UserView extends Component {
    render() {
        return (
            <div>
                <h3>Users</h3>
                { this.props.users.map(user =>
                    <div key={user.id}>{user.first_name} {user.last_name}</div>
                )}
            </div>
        );
    }
}

export default UserView;
