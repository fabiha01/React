import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';

class Home extends Component {
    render(){
        console.log(this.props);
        const {posts} = this.props; // props being sent from redux store
        // we are mapping through posts to get each individual post
        // we're setting that array in postList
        const postList = posts.length ? (
            // for each post in posts
            posts.map(post => {
                return (
                    // set the key to the id
                    <div className="post card" key={post.id}>
                    <img src={Pokeball} alte="A pokeball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}><span className="card-title red-text">{post.title}</span></Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Posts yet.</div>
        )
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )

    }

}

// create a function here to set mapStateToProps
// to the state of the redux store
const mapStateToProps = (state) => {
    return {
        posts: state.posts // setting the state.posts from redux
    }
}

// connecting redux store passing the props as set in variable above
// passing the home component to connect to redux store
export default connect(mapStateToProps)(Home);