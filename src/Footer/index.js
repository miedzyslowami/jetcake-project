import React, { Component } from 'react';
import Content from 'react-bulma-components/lib/components/content';
import Container from 'react-bulma-components/lib/components/container';
import FooterBulma from 'react-bulma-components/lib/components/footer';

class Footer extends Component {
    render() {
        return (
            <FooterBulma>
                <Container>
                    <Content style={{ textAlign: 'center' }}>
                        <p> <strong>Miedzyslowami 2020</strong></p>
                    </Content>
                </Container>
            </FooterBulma>
        )
    }
}

export default Footer;
