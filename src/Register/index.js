import React, { useCallback } from 'react';
import { Field, Control, Label } from 'react-bulma-components/lib/components/form';
import { withRouter } from 'react-router';
import app from '../base';
import { Hero, Heading, Button, Section, Container, Card } from 'react-bulma-components';

const Register = ({ history }) => {
  const handleRegister = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push('/');
    } catch (error) {
      alert(error);
    }
  }, [history]);

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
                      <input className='input' name='email' type='email' placeholder='Text input' />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Password</Label>
                    <Control>
                      <input className='input' name='password' type='password' placeholder='password' />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Address</Label>
                    <Control>
                      <input className='input' type='text' placeholder='Address' />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Phone number</Label>
                    <Control>
                      <input className='input' type='number' placeholder='Phone number' />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Date of birth</Label>
                    <Control>
                      <input className='input' name='birthday' type='number' placeholder='birthday' />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Security Question 1</Label>
                    <Control>
                      <input className='input' type='text' placeholder='Question 1' />
                      <input className='input' type='text' placeholder='Answear 1' />
                    </Control></Field>
                  <Field>
                    <Label>Security Question 2</Label>
                    <Control>
                      <input className='input' type='text' placeholder='Question 2' />
                      <input className='input' type='text' placeholder='Answear 2' />
                    </Control></Field>
                  <Field>
                    <Label>Security Question 3</Label>
                    <Control>
                      <input className='input' type='text' placeholder='Question 3' />
                      <input className='input' type='text' placeholder='Answear 3' />
                    </Control></Field>
                  <Button type='submit' className='is-primary'>Register</Button>
                </Card>
              </Container>
            </Hero.Body>
          </Hero></Section>
      </form>
  );
};

export default withRouter(Register);
