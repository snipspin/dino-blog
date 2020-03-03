import React, { Component } from "react";

// postTitle
// author
// content: should render one or more paragraphs of content
// comments: should render one or more comments

    let posts = [
        {
        postTitle: "Dinosaurs are awesome",
        author: "Stealthy Stegosaurus",
        content: "Check out this body property!",
        comments: ["First", "Second"]
    },
    {
        postTitle: "Dinosaurs are awesome 2",
        author: "Stealthy Stegosaurus 2 ",
        content: "Check out this body property! 2",
        comments: ["First 2", "Second 2", "Third"]
    }
]

function PostingComments(props) {
    const comments = props;
    const comment = comments.map((element) => {
    return <span>{element}</span>
    })
    return <div>{comment}</div>;
}

function PostList() {
    const posting = posts.map((post) => 
    <div>
    <h1>{post.postTitle}</h1>
    <span>{post.author}</span>
    <p>{post.content}</p>
    <div>{PostingComments(post.comments)}</div>
    </div>
    )
    return <div class="entry">{posting}</div>
}

    class Post extends Component {
        render() {
            
                return (
                    <PostList />
                );
        }
    }

    export default Post;