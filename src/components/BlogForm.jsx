import { useState } from 'react'

const BlogForm = ({ addBlog }) => {
  const [newBlog, setNewBlog] = useState({
    title: '',
    author: '',
    url: ''
  })

  const handleBlogChange = (event) => {
    const { name, value } = event.target
    setNewBlog({ ...newBlog, [name]: value })
  }

  const createBlog = (event) => {
    event.preventDefault()
    addBlog(newBlog)

    setNewBlog({
      title: '',
      author: '',
      url: ''
    })
  }

  return (
    <div>
      <form onSubmit={createBlog}>
        <div>
          Title:
          <input
            type="text"
            value={newBlog.title}
            name="title"
            onChange={handleBlogChange}
          />
        </div>
        <div>
          Author:
          <input
            type="text"
            value={newBlog.author}
            name="author"
            onChange={handleBlogChange}
          />
        </div>
        <div>
          Url:
          <input
            type="text"
            value={newBlog.url}
            name="url"
            onChange={handleBlogChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default BlogForm
