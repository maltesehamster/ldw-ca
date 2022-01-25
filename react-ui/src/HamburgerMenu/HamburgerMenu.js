import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './HamburgerMenu.css';

// [Domain]|[Page/Context]|ComponentName|[Type]
class HamburgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenuDisplayed: false
        };
    
        this.lineContainerRef = React.createRef();  
        this.handleClick = this.handleClick.bind(this);  
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick);
    }

    render() {
        return ([
            <div class="line-container" ref={this.lineContainerRef}>
                <div class="line">-</div>
                <div class="line">-</div>
                <div class="line">-</div>
            </div>,
            <div className={!this.state.isMenuDisplayed ? 'hidden' : 'menu'}>
                <Link to='/transactions'>Transactions</Link>
                <Link to='/users'>Users</Link>
            </div>
        ]);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClick);
    }

    handleClick(event) {
        if (this.lineContainerRef.current.contains(event.target)) {
            this.setState(state => ({      
                isMenuDisplayed: !state.isMenuDisplayed    
            }));
        }
        else {
            this.setState(state => ({      
                isMenuDisplayed: false    
            }));
        }
    }
}

export default HamburgerMenu;
