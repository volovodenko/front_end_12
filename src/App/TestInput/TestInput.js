import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './TestInput.css';

class TestInput extends Component {

    onBtnClickHandler(e) {
        alert(ReactDOM.findDOMNode(this.refs.myTestInput).value);
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.myTestInput).focus();
    }

    render() {

        return (
            <p>
                <input
                    className='testInput'
                    placeholder='введите значение'
                    ref="myTestInput"
                />
                <button onClick={this.onBtnClickHandler.bind(this)}>Показать alert</button>
            </p>
        )

    }

}


export default TestInput;