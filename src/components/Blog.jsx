import { useState } from 'react'

const Blog = ({ blog, addLike }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [detailsVisible, setDetailsVisible] = useState(false)
  const detailsHidden = { display: detailsVisible ? 'none' : '' }
  const detailsShown = { display: detailsVisible ? '' : 'none' }

  const likeBlog = () => {
    blog.likes += 1
    addLike(blog)
  }

  return (
    <div>
      <div style={{ ...blogStyle, ...detailsHidden }}>
        {blog.title}{' '}
        <button onClick={() => setDetailsVisible(true)}>View</button>
      </div>
      <div style={{ ...blogStyle, ...detailsShown }}>
        <div>{blog.title}</div>
        <div>{blog.url}</div>
        <div>{blog.likes} likes</div>
        <div>{blog.author}</div>
        <button onClick={() => setDetailsVisible(false)}>Hide</button>
        {' '}
        <button onClick={likeBlog}>Like</button>
      </div>
    </div>
)}

export default Blog