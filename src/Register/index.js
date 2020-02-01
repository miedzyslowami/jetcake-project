import React, { useCallback, useState } from 'react'
import { Field, Control, Label, Input } from 'react-bulma-components/lib/components/form'
import { withRouter } from 'react-router'
import firebase from '../base'
import { Hero, Heading, Button, Section, Container, Card } from 'react-bulma-components'

const Register = ({ history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = useCallback(async event => {
    event.preventDefault()
    const { email, password } = event.target.elements
    try {
      await firebase.register(email.value, password.value)
      history.push('/profile')
      alert('Thank you for registration. You can now update your user data')
    } catch (error) {
      alert(error)
    }
  }, [history])

  return (
    <form onSubmit={handleRegister}>
      <Section>
        <Hero>
          <Heading>
            Register new user
                </Heading>
          <Hero.Body>
            <Container>
              <Card>
                <Field>
                  <Label>Email</Label>
                  <Control>
                    <Input className='input' name='email' type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />
                  </Control>
                </Field>
                <Field>
                  <Label>Password</Label>
                  <Control>
                    <Input className='input' name='password' type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />
                  </Control>
                </Field>
                <Button type='submit' className='is-primary'>Register</Button>
              </Card>
            </Container>
          </Hero.Body>
        </Hero></Section>
    </form>
  )
}

export default withRouter(Register)
