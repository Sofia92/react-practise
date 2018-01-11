/**
 * User: sofia
 * Date: 2018/1/9
 * Version: 1.0.0
 * Description:
 */
import React, {Component} from 'react';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'

export class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', fruit: ''};
    }

    submit = (event) => {
        alert('your name is: ' + this.state.name +
            'your favorite is: ' + this.state.fruit);
        event.preventDefault();
    };

    nameChange = (event) => {
        this.setState({name: event.target.value});
    };
    fruitChange = (event) => {
        this.setState({fruit: event.target.value})
    };

    render() {
        return <div>
            <form onSubmit={this.submit}>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.nameChange}/>
                </label>
                <input type="submit" value="Submit"/>
                <br/>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.fruit} onChange={this.fruitChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            <Picker set="emojione"/>
            <Reservation/>
        </div>
    }
}

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {checked: true, numberOfGuests: 2};
    }

    inputChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        this.setState({[name]: value});
    };

    render() {
        return <div>
            <p>check in for guest</p>
            <form>
                <label>
                    isChecked: <input name="checked" type="checkbox" checked={this.state.checked} onChange={this.inputChange}/>
                </label>
                <br/>
                <label>
                    numbers: <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.inputChange}/>
                </label>
            </form>
        </div>
    }
}