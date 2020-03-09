import React from 'react'

const PostContent = ({post}) => {

    const {title, content, id, author} = post
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{author}</p>
        </div>
    )
}

export default PostContent