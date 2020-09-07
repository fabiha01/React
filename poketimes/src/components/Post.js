import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions';

class Post extends Component {
    // we are calling this function which is firing the deletePost function
    // which is inside of mapDispatchToProps
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        // after calling the delete function - we send the user back to homepage
        this.props.history.push('/'); 
    }
    render() {
        console.log(this.props);
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>DELETE POST</button>
                </div>
            </div>
        ) : (
            <div className="center">Loading...</div>
        )
        return (
            <div className="container">
                <h4>{post}</h4>
            </div>

        )
    }
}

const mapStateToprops = (state, ownProps) => {
    let id = ownProps.match.params.post_id; // this is where we get info from route parameters
    return {
        post: state.posts.find(post => post.id === id)
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        // we are disptaching the action - type and id whenever we call the delete post function
        deletePost: (id) => { dispatch(deletePost(id)) }
    }

}

export default connect(mapStateToprops, mapDispatchToProps)(Post);