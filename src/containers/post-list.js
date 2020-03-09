import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { readAllPost, deletePost } from '../actions/index'
import PostListItem from '../components/post-list-item'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'



class PostList extends Component {

    componentWillMount() {
        this.props.readAllPost()
    }

    deletePostCallBack(post) {
        this.props.deletePost(post.id)
    }

    renderPosts() {
        const {posts} = this.props
        if (posts) {
            return posts.map((post) =>{
                return <PostListItem key={post.id} post={post} deletePostCallBack={(post) => this.deletePostCallBack(post)}/>
            })

        }
    }

    render () {
        return (
            <div>
                <h1>Liste des Posts</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <ReactCSSTransitionGroup component="tbody" 
                        transitionEnterTimeout = {500}
                        transitionLeaveTimeout = {300}
                        transitionName="fade">
                        {this.renderPosts()}
                    </ReactCSSTransitionGroup>

                </table>
            </div>
        )
    }
}



const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({readAllPost, deletePost}, dispatch)        
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)