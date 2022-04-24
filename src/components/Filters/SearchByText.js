import React from 'react'
import { Form } from 'react-bootstrap'

export const SearchByText = () => {
  return (
    <div className='mx-3 p-3'>
        <Form.Group>
            <Form.Control type="text" placeholder="Search dealers"></Form.Control>
        </Form.Group>
    </div>
  )
}