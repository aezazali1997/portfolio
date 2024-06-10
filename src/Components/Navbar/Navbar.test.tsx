import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
test('rendering navbar', () => {
  render(<Navbar />)
  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
  const items = screen.getAllByRole('listitem')
  expect(items).toHaveLength(4)
})
