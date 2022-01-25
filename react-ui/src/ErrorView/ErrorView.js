import React, { Component } from 'react';

import './ErrorView.css';

// [Domain]|[Page/Context]|ComponentName|[Type]
class ErrorView extends Component {
    render() {
        return (
            <div>
                <h3>Error</h3>
                <div>Hi {this.props.errorMessage}</div>
            </div>    
        );
    }
}

export default ErrorView;
