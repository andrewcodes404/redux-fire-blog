// import _ from 'lodash'
/// delete this 👆 when finnished
import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'



class PostsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts() {
        // ES6 destructing
        const { posts } = this.props

        ///create empty aray for result
        const results = []

        //run through our object to find the prop UIDs
        for (const prop in posts) {
            // we can pick out values from each object -->  posts[prop].keyName
            const title = posts[prop].title
            const cats = posts[prop].categories
            const content = posts[prop].content
            // push the result in top the empty eaary
            results.push(
                <div key={prop}>
                    <Link to={`/posts/${prop}`}>
                        <h3>{title}</h3>
                    </Link>  
                    
                    <p>{cats}</p>
                    <p>{content}</p>
                </div>
            )
        }
        // console.log("results", results);
        // 🤔 don't know why but this return will render out all the resluts??🤔
        return (
            results
        )
    }
    render() {
        console.log("this.props.posts : ", this.props.posts);
        return (
            <div className="hello">
                <h1>Blog Posts</h1>
                <Link to="/posts/new">Add Post</Link>                

                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log("state : ", state);
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);