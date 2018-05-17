import React, { Component } from 'react';
import './NewsCount.css';

class NewsCount extends Component {

    render() {
        let newsCount = this.props.total;

        return (
            <div className="News_Count">
                <p>Общее количество новостей: {newsCount}</p>
            </div>
        );
    }
}

export default NewsCount;