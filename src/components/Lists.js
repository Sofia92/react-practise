/**
 * User: sofia
 * Date: 2018/1/9
 * Version: 1.0.0
 * Description:
 */
import React, {Component} from 'react';

export class Lists extends Component {
    lists = [1, 2, 3, 4, 5];

    render() {
        return <div>
            <p>this is lists below: </p>
            <ListItems number={this.lists}/>
        </div>
    }
}

function ListItems(props) {
    const numbers = props.number;
    const listItems = numbers.map(number => <li key={number.toString()}>{number * 2}</li>)
    return <ul>{listItems}</ul>
}