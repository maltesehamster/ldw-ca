import React, { Component } from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

import './HeaderView.css';

// [Domain]|[Page/Context]|ComponentName|[Type]
class HeaderView extends Component {
    render() {
        return (
            <div class="header">
                <div class="icon"></div>
                <h1 class="title">Indebtd</h1>
                <div class="menu-container">
                    <HamburgerMenu menuOptions={this.props.menuOptions} />   
                </div>
            </div>
        );
    }
}

export default HeaderView;
