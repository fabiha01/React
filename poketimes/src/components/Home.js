import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';

class Home extends Component {
    state = {
        posts: []
    }
    // use the lifecycle hook componentDidMount
    componentDidMount() {
        // this is asynchronus - it will take some time to get the posts
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then (response => {
            console.log(response);
            // store the posts to the state - only get 10 posts
            this.setState({
                posts: response.data.slice(0, 10)
            })
        })

    }
    render(){
        const {posts} = this.state;
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

export default Home;