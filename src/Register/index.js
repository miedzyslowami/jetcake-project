import React, { useCallback, useState } from 'react'
import { Field, Control, Label, Input, InputFile } from 'react-bulma-components/lib/components/form'
import { withRouter } from 'react-router'
import firebase from '../base'
import { Hero, Heading, Button, Section, Container, Card } from 'react-bulma-components'

const Register = ({ history }) => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [answear1, setAnswear1] = useState('')
  const [answear2, setAnswear2] = useState('')
  const [answear3, setAnswear3] = useState('')
  const [birthday, setBirthday] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleRegister = useCallback(async event => {
    event.preventDefault()
    const { email, password, address,phone, birthday,question1,answear1,question2,answear2,question3,answear3, avatar } = event.target.elements
    try {
      await firebase.register(email.value, password.value)
      await firebase.addUserData(address.value,phone.value, birthday.value,question1.value,answear1.value,question2.value,answear2.value,question3.value,answear3.value, avatar.value)
      history.push('/profile')
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
                    <InputFile name='avatar' type='file' value={avatar} onChange={e => setAvatar(e.target.value)}/>
                  </Field>
                  <Field>
                    <Label>Email</Label>
                    <Control>
                      <Input className='input' name='email' type='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required/>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Password</Label>
                    <Control>
                      <Input className='input' name='password' type='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required/>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Address</Label>
                    <Control>
                      <Input className='input' type='text' placeholder='Address' name='address' value={address} onChange={e => setAddress(e.target.value)}/>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Phone number</Label>
                    <Control>
                      <Input className='input' type='number' placeholder='Phone number' name='phone' value={phone} onChange={e => setPhone(e.target.value)}/>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Date of birth</Label>
                    <Control>
                      <Input className='input' name='birthday' type='number' placeholder='birthday' value={birthday} onChange={e => setBirthday(e.target.value)}/>
                    </Control>
                  </Field>
                  <Field>
                    <Label>Security Question 1</Label>
                    <Control>
                      <Input className='input' type='text' placeholder='Question 1' name='question1' value={question1} onChange={e => setQuestion1(e.target.value)}/>
                      <Input className='input' type='text' placeholder='Answear 1' name='answear1' value={answear1} onChange={e => setAnswear1(e.target.value)}/>
                    </Control></Field>
                  <Field>
                    <Label>Security Question 2</Label>
                    <Control>
                      <Input className='input' type='text' placeholder='Question 2' name='question2' value={question2} onChange={e => setQuestion2(e.target.value)}/>
                      <Input className='input' type='text' placeholder='Answear 2' name='answear2' value={answear2} onChange={e => setAnswear2(e.target.value)}/>
                    </Control></Field>
                  <Field>
                    <Label>Security Question 3</Label>
                    <Control>
                      <Input className='input' type='text' placeholder='Question 3' name='question3' value={question3} onChange={e => setQuestion3(e.target.value)}/>
                      <Input className='input' type='text' placeholder='Answear 3' name='answear3' value={answear3} onChange={e => setAnswear3(e.target.value)}/>
                    </Control></Field>
                  <Button type='submit' className='is-primary'>Register</Button>
                </Card>
              </Container>
            </Hero.Body>
          </Hero></Section>
      </form>
  )
}

export default withRouter(Register)
