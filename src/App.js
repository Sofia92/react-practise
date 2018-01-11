import React, {Component} from 'react';
import './App.css';
import {WelcomeComponent} from "./components/Greeting";
import {Clock} from "./components/Clock";
import {CommentComponent} from "./components/Comment";
import {MyEvents} from "./components/Events";
import {LoginControl} from "./components/LoginControl";
import {Lists} from "./components/Lists";
import {NameForm} from "./components/NameForm";
import {CalculatorTemperature} from "./components/BoilingVerdict";
import {FilterableProductTable} from "./components/FilterableProductTable";


class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    changeName(v) {
        this.setState({name: v});
    }

    render() {
        return <div>
            <CommentComponent/>
            <Clock/>
            <MyEvents/>
            <LoginControl/>
            <Lists/>
            <NameForm/>
            <CalculatorTemperature/>
            <FilterableProductTable/>
            <WelcomeComponent name={this.state.name}
                              changeName={(name) => this.changeName(name)}>{this.state.name}</WelcomeComponent>
        </div>
    }

}


export default App;
