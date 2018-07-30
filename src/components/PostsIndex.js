// import _ from 'lodash'
/// delete this 👆 when finished
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

        ///create empty array for result
        const results = []

        //run through our object to find the prop UIDs
        for (const prop in posts) {
            // we can pick out values from each object -->  posts[prop].keyName
            const title = posts[prop].title
            const cats = posts[prop].categories
            const content = posts[prop].content
            // push the result in top the empty array
            results.push(
                <div key={prop} className="blog">
                    <Link to={`/posts/${prop}`}>
                        <h3>{title}</h3>
                    </Link>


                    <p className="">{content}</p>
                    <br />
                    <p><span className="bold">category: </span>{cats}</p>
                </div>
            )
        }
        // console.log("results", results);
        // 🤔 don't know why but this return will render out all the results??🤔
        return (
            results
        )
    }
    render() {
        console.log("this.props.posts : ", this.props.posts);
        return (
            <div className="front-page">
                <div className="fp-nav">
                    <span className="pg-title">Blog Posts </span><span className="add-new"><Link to="/posts/new"><span role="img" aria-label="emoji">👉</span>  Add Post</Link> </span>
                </div>
                <div className="blog-cont">

                    {this.renderPosts()}
                </div>
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