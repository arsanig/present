import React from 'react'
import { Button, Segment, Form } from 'semantic-ui-react'

const Login = () => (
<Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input type='username' placeholder='Username' required/>
        <Form.Input type='password' placeholder='Password' required/>
      </Form.Group>
      <Button type='submit'>Login</Button>
    </Form>
  </Segment>
)

export default Login