import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Article.css';

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    readmoreClick(e) {
        e.preventDefault();
        this.setState({visible: true});
    }

    render() {
        let author = this.props.data.author;
        let text = this.props.data.text;
        let bigText = this.props.data.bigText;
        let visible = this.state.visible;
        let styles = {
            lnk: {
                display: !visible ? "block" : "none"
            },
            txtFull: {
                display: visible ? "block" : "none"
            }
        };

        return (
            <div className="News_Article">
                <p className="newsAuthor">{author}:</p>
                <p className="newsText">{text}</p>
                <a href="/" onClick={this.readmoreClick.bind(this)} className='newsReadmore'
                   style={styles.lnk}>Подробнее</a>
                <p className="newsText" style={styles.txtFull}>{bigText}</p>
            </div>
        )

    }

}

Article.propTypes = {
    data: PropTypes.shape({
        author: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        bigText: PropTypes.string.isRequired
    })
};


export default Article;
