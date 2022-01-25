import React, { Component } from 'react';

import './TransactionView.css';

// [Domain]|[Page/Context]|ComponentName|[Type]
class TransactionView extends Component {
    render() {
        return (
            <div>
                <h3>Transactions</h3>
                { this.props.transactions.map(user =>
                    <div key={user.id}>{user.first_name} {user.last_name} $0.00</div>
                )}
            </div>
        );
    }
}

export default TransactionView;
