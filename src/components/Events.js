/**
 * User: sofia
 * Date: 2018/1/9
 * Version: 1.0.0
 * Description:
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export function MyEvents() {
    function handleLink(e) {
        e.preventDefault();
        console.log(e);
    }

    return <div>
        <p>this is custom events below: </p>
        <a href="#" onClick={handleLink}>Click me</a>
        <Toggle/>
    </div>
}

class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    switchToggle = () => {
        this.setState((preState) => {
            return {isToggleOn: !preState.isToggleOn};
        });
    };

    render() {
        return <div>
            <p>this is custom events for switch below: </p>
            <button onClick={this.switchToggle}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
        </div>
    }
}

// Toggle.propTypes = {
//     isToggleOn: PropTypes.number
// };