import React, { Component } from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import HeroImage from '../Assets/daylight-environment-forest-idyllic-459225.jpg';

class Home extends Component {
    render() {
        return (
            <>
                <Section>
                    <Hero>
                        <Hero.Body>
                            <Container>
                                <img alt='nature' src={HeroImage} />
                            </Container>
                        </Hero.Body>
                    </Hero>
                </Section>
                <Section>
                    <Hero>
                        <Hero.Body>
                            <Container>
                                <Heading>
                                    Informational section below hero image
                                </Heading>
                                <article>
                                    <p>Chocolate I love sesame snaps dragée soufflé I love halvah. Jujubes tiramisu chocolate bar gummies icing I love jujubes. Gummi bears gingerbread donut marzipan cotton candy I love. Fruitcake lollipop pastry pudding sugar plum I love apple pie cookie danish. Candy cake chocolate cake chocolate cake powder cotton candy caramels gummi bears. Cake bonbon pie pastry. Dragée tart candy chocolate muffin. Toffee oat cake muffin powder biscuit chocolate cake pastry. Donut muffin chupa chups lollipop dessert icing gummi bears cake. Lemon drops marzipan sesame snaps fruitcake I love.

Jelly beans bear claw biscuit dragée cookie. Marshmallow candy canes jelly. Macaroon fruitcake pastry caramels tiramisu. Bear claw chupa chups marshmallow biscuit danish powder topping tiramisu chocolate. Marshmallow jelly cookie I love. Tootsie roll cupcake chocolate cookie cookie icing jelly-o. Jujubes macaroon wafer. Cupcake icing powder liquorice bear claw jujubes biscuit wafer.

Macaroon cupcake apple pie tootsie roll tiramisu I love I love. Jujubes jelly I love sweet. Jelly jelly jelly-o sweet chocolate cake dessert carrot cake. Carrot cake chocolate bar lemon drops. Apple pie danish tiramisu sweet roll I love. Donut macaroon gummies donut wafer I love gummies sesame snaps. Bonbon liquorice jelly fruitcake I love apple pie bear claw brownie. Pastry I love croissant jelly-o jelly. Macaroon I love biscuit I love danish jelly biscuit cake dessert.

Cake chupa chups sweet roll carrot cake pudding topping lemon drops carrot cake gummi bears. Chocolate cake tootsie roll lemon drops cake I love. Donut gingerbread bear claw apple pie muffin donut cookie I love tootsie roll. Lemon drops jelly beans chocolate chocolate lollipop chocolate bar cupcake dessert caramels. Chocolate bar biscuit marshmallow. Cookie muffin jelly.

Fruitcake pastry toffee I love gummi bears chocolate bar jelly-o. Liquorice jelly jelly-o croissant oat cake. Gummies cake I love macaroon icing jelly wafer. Lollipop chocolate bar I love. Sweet roll I love chocolate. Jelly-o jujubes ice cream liquorice danish caramels carrot cake. Cheesecake bonbon cookie ice cream cotton candy jelly jelly-o muffin. Bonbon lollipop jelly beans toffee cotton candy I love apple pie. Pastry tootsie roll chupa chups chocolate macaroon.

                                    </p>
                                </article>
                            </Container>
                        </Hero.Body>
                    </Hero>
                </Section>
            </>
        )
    }
}

export default Home;
