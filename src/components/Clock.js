/**
 * User: sofia
 * Date: 2018/1/8
 * Version: 1.0.0
 * Description:
 */
import React, {Component} from 'react';

export class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timeId = setInterval(() => {
            this.tick()
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timeId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return <div>
            <p>this is a dateTimeClock below: </p>
            {this.state.date.toLocaleTimeString()}
            </div>;
    }
}