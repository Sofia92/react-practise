/**
 * User: sofia
 * Date: 2018/1/9
 * Version: 1.0.0
 * Description:
 */
import React, {Component} from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class TemperatureInput extends Component {

    render() {
        const scale = this.props.scale;
        return <div>
            <fieldset>
                <legend>输入一个 {scaleNames[scale]} 温度</legend>
                <input type="number" value={this.props.temperature}
                       onChange={(event) => this.props.changeTemperature(event.target.value)}/>
            </fieldset>
        </div>
    }
}
function BoilingVerdict(props) {
    if (props.temperature >= 100) {
        return <p>水已经烧开啦！</p>
    } else {
        return <p>水还没烧开</p>
    }
}
export class CalculatorTemperature extends Component {
    constructor(props) {
        super(props);
        this.state = {scale: 'c', temperature: 30};
    }

    changeTemperature(temperature) {
        this.setState({temperature: temperature});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.state.scale;
        const celsiusTemperature = scale === 'c' ? temperature : tryConvert(temperature, toFahrenheit);
        const fahrenheitTemperature = scale === 'f' ? temperature : tryConvert(temperature, toCelsius);
        return <div>
            <TemperatureInput temperature={celsiusTemperature}
                              changeTemperature={(temperature) => this.changeTemperature(temperature)}
                              scale="c"/>
            <TemperatureInput temperature={fahrenheitTemperature}
                              changeTemperature={(temperature) => this.changeTemperature(temperature)}
                              scale="f"/>
            <BoilingVerdict temperature={parseFloat(celsiusTemperature)}/>
        </div>
    }
}