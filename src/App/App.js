import React, {Component} from 'react';
import News from './News/News';
import {Add, emitter} from './Add/Add';
import myNews from './myNews';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            news: myNews
        }
    }

    static listener(item) {
        let nextNews = [...item, ...this.state.news];

        this.setState({news: nextNews});
    };

    componentDidMount() {
        emitter.on('NewsAdd', App.listener.bind(this));
    }

    componentWillUnmount() {
        emitter.off(App.listener);
    }

    render() {
        return (
            <div className="App">
                <h1>Всем привет, я компонент App! Я умею отображать новости.</h1>
                <Add />
                <News data={this.state.news}/>
            </div>
        );
    }
}

export default App;