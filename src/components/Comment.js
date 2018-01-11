/**
 * User: sofia
 * Date: 2018/1/8
 * Version: 1.0.0
 * Description:
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CommentComponent extends Component {
    comment = {
        icon: './../logo.svg',
        comments: '',
        date: new Date(),
    };

    render() {
        return <div>
            <p>this is a comment component below: </p>
            <UserIcon comment={this.comment}/>
            <Comment/>
            {this.comment.date.toLocaleTimeString()}
        </div>
    }

}

function UserIcon(props) {
    return <img src={props.comment.icon} alt="用户头像"/>
}

function Comment(props) {
    return <input type="text" value={props.comments}/>
}

// Comment.propTypes = {
//     comments: PropTypes.bool
// };

Comment.defaultrops = {
    comments: 'Sofia'
};