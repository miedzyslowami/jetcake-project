import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import app from '../base';
import { AuthContext } from '../Auth';
import { Hero, Section, Heading, Card, Container, Button } from 'react-bulma-components';
import { Field, Control, Label } from 'react-bulma-components/lib/components/form';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to='/' user={currentUser} />;
  }

  return (
    <Section>
      <Hero>
        <Heading>
          Log in
                </Heading>
        <Hero.Body>
          <Container>
            <Card>
              <form onSubmit={handleLogin}>
                <Field>
                  <Label>Email</Label>
                  <Control>
                    <input className='input' name='email' type='email' placeholder='email' />
                  </Control>
                </Field>
                <Field>
                  <Label>Password</Label>
                  <Control>
                    <input className='input' name='password' type='password' placeholder='password' />
                  </Control>
                </Field>
                <Field className='is-grouped'>
                  <Control>
                    <Button className='is-primary' type='submit'>Log in</Button>
                  </Control>
                  <Control>
                    <Link className='button is-primary is-outlined' to='/register'>or register</Link>
                  </Control>
                </Field>
              </form>
            </Card>
          </Container>
        </Hero.Body>
      </Hero>
    </Section>
  );
};

export default withRouter(Login);
