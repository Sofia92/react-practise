/**
 * User: sofia
 * Date: 2018/1/8
 * Version: 1.0.0
 * Description:
 */
import React, {Component} from 'react';

export class GreetingComponent extends Component {
    render() {
        function formatUsername(firstName, lastName) {
            return firstName + ' ' + lastName;
        }

        function greeting(firstName, lastName) {
            if (!!firstName) {
                return <label>hello, {formatUsername(firstName, lastName)}</label>;
            } else {
                return <label>&nbsp;&nbsp; hello, stranger</label>
            }
        }

        let loginMsg = null;
        if (this.props.logState) {
            loginMsg = 'welcome back';
        } else {
            loginMsg = 'please login first';
        }

        return (
            <div className="App">
                <p>show greeting</p>
                {greeting('yu', 'sofia')}
                {greeting(null, null)}
                <p>{loginMsg}</p>
            </div>
        );
    }
}

GreetingComponent.defaultProps = {
    logState: true
};
export function WelcomeComponent(props) {
    return <div>
        <p onClick={() => props.changeName('suiyess')}>click to show name below: </p>
        {props.children}</div>
}