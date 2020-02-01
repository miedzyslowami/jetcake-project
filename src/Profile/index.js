import React, { Component } from 'react'
import { Hero, Section, Heading, Container, Content } from 'react-bulma-components'
import Form from 'Form'
import firebase from '../base'

class Profile extends Component {
    render() {
        return (
            <>
                <Section>
                    <Hero>
                        <Hero.Body>
                            <Container>
                                <Heading className='is-size-4'>Hello {firebase.getCurrentUser()}!</Heading>
                                <Content>
                                    <Form userData={firebase.getUserData().then((userData) => userData)} />
                                </Content>
                            </Container>
                        </Hero.Body>
                    </Hero>
                </Section>
            </>
        )
    }
}

export default Profile
