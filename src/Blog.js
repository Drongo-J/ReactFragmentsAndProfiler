import React from 'react'



export default function Blog() {
  return (
    <>
      <Post title="Ad update" body="It has be a while since I last posted"></Post>
      <Post title="My New Blog" body="This is new blog"></Post>
    </>
  )
}


function Post({title, body}) {
  return (
    <>
      <PostTitle title={title}></PostTitle>
      <PostBody body={body}></PostBody>
    </>
  )
}

function PostTitle({title}){
    return <h1>{title}</h1>
}

function PostBody({body}){
    return <article>{body}</article>
}
