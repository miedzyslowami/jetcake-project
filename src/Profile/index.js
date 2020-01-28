import React, { Component } from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Image from 'react-bulma-components/lib/components/image';
import Content from 'react-bulma-components/lib/components/content';
import Form from 'Form';

class Profile extends Component {
    render() {
        return (
            <>
                <Section>
                    <Hero>
                        <Hero.Body>
                            <Container>

                                <Card>
                                    <Card.Header>
                                        <Card.Header.Title>Your profile details</Card.Header.Title>
                                    </Card.Header>
                                    <Card.Content>
                                        <Media>
                                            <Media.Item renderAs="figure" position="left">
                                                <Image size={128} alt="128x128" src="http://bulma.io/images/placeholders/128x128.png" />
                                            </Media.Item>
                                        </Media>
                                        <Content>
                                            <Form />
                                        </Content>
                                    </Card.Content>
                                    <Card.Footer>
                                        <Card.Footer.Item renderAs="a" href="#Edit">Edit</Card.Footer.Item>
                                    </Card.Footer>
                                </Card>
                            </Container>
                        </Hero.Body>
                    </Hero>
                </Section>
            </>
        )
    }
}

export default Profile;
