import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders content', async () => {
  const blog = {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    user: {
      username: 'tester',
      name: 'mr. tester',
      id: 'test_id'
    },
    __v: 0
  }
  const user = {
    username: 'tester',
    name: 'mr. tester',
    id: 'test_id'
  }

  const { container } = render(<Blog blog={blog} user={user} />)

  const title = await screen.findByText('React patterns', )
  expect(title).toBeDefined()

  const div = container.querySelector('.details')
  expect(div).toHaveStyle('display: none')
})
