import React from 'react';
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions'
import { Link } from 'react-router-dom'

class PostsShow extends React.Component {
  componentDidMount() {

    if (!this.props.posts) {
      const { id } = this.props.match.params
      this.props.fetchPost(id);
    }
  }

  OnDeleteClick = () => {
    const { id } = this.props.match.params
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props
    console.log("this.props : ", this.props);
    if (!post) { return <h1>LOADING</h1>; }
    return (
      <div>
        <div className="fp-nav">
        <span className="pg-title"><Link to="/">Back to index </Link></span>
         
          <button onClick={this.OnDeleteClick}>Delete Post</button>
        </div>


       
       
        <h3>{post.title}</h3>
        <h6>Cats: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// Destructured call to posts.state 
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)