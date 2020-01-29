import React, { Component } from 'react';
import { Field, Control, Label, Input } from 'react-bulma-components/lib/components/form';
import Button from 'react-bulma-components/lib/components/button';

class Form extends Component {
    render() {
        return (
            <>
                <Field>
                    <Label>Username</Label>
                    <Control>
                        <Input placeholder='Text input' />
                    </Control>
                </Field>
                <Field>
                    <Label>Phone number</Label>
                    <Control>
                        <Input type='number' placeholder='Phone number' />
                    </Control>
                </Field>
                <Field>
                    <Label>Address</Label>
                    <Control>
                        <Input type='text' placeholder='Address' />
                    </Control>
                </Field>
                <Field>
                    <Label>Email</Label>
                    <Control>
                        <Input type='email' placeholder='Email input' />
                    </Control>
                </Field>
                <Field>
                    <Label>Date of birth</Label>
                    <Control>
                        <Input type='number' />
                    </Control>
                </Field>
                <Field kind='group'>
                    <Label>Security Question 1</Label>
                    <Input type='text' placeholder='Question 1' />
                    <Input type='text' placeholder='Answear 1' />
                </Field>
                <Field kind='group'>
                    <Label>Security Question 2</Label>
                    <Input type='text' placeholder='Question 2' />
                    <Input type='text' placeholder='Answear 2' />
                </Field>
                <Field kind='group'>
                    <Label>Security Question 3</Label>
                    <Input type='text' placeholder='Question 3' />
                    <Input type='text' placeholder='Answear 3' />
                </Field>
                <Field kind='group'>
                    <Control>
                        <Button type='primary'>Submit</Button>
                    </Control>
                    <Control>
                        <Button color='link'>Cancel</Button>
                    </Control>
                </Field>
            </>
        )
    }
}

export default Form;
