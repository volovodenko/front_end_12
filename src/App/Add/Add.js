import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from 'event-emitter';
import './Add.css';

const emitter = new EventEmitter();

class Add extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authorEmpty: true,
            textEmpty: true
        }
    }

    onBtnClickHandler(e) {
        let author = ReactDOM.findDOMNode(this.refs.author).value;
        let text = ReactDOM.findDOMNode(this.refs.text).value;

        let item = [{
            author: author,
            text: text,
            bigText: '...'
        }];

        emitter.emit('NewsAdd', item);
        e.preventDefault();
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.author).focus();
        ReactDOM.findDOMNode(this.refs.alertButton).disabled = true;
        ReactDOM.findDOMNode(this.refs.checkrule).disabled = true;
    }

    onCheckRuleClick(e) {
        ReactDOM.findDOMNode(this.refs.alertButton).disabled = !e.target.checked;
    }

    checkruleDisabled() {
        return this.state.authorEmpty || this.state.textEmpty;
    }

    onChangeAuthor(e) {
        let state = (e.target.value.trim().length > 0) ? false : true;

        this.setState({authorEmpty: state}, () => {
            ReactDOM.findDOMNode(this.refs.checkrule).disabled = this.checkruleDisabled();
        });
    }

    onChangeText(e) {
        let state = (e.target.value.trim().length > 0) ? false : true;

        this.setState({textEmpty: state}, () => {
            ReactDOM.findDOMNode(this.refs.checkrule).disabled = this.checkruleDisabled();
        });


    }


    render() {

        return (
            <form className='add'>
                <input
                    type="text"
                    defaultValue=""
                    placeholder="Ваше имя"
                    ref="author"
                    onChange={this.onChangeAuthor.bind(this)}
                />

                <textarea
                    defaultValue=""
                    placeholder="Текст новости"
                    ref="text"
                    onChange={this.onChangeText.bind(this)}
                />

                <label>
                    <input
                        type="checkbox"
                        defaultChecked={false}
                        onChange={this.onCheckRuleClick.bind(this)}
                        ref="checkrule"
                    />
                    Я согласен с правилами
                </label>

                <button onClick={this.onBtnClickHandler.bind(this)} ref="alertButton">Показать alert</button>
            </form>
        )

    }

}


export {Add, emitter};