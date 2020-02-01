import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Field, Control, Label, Input, InputFile } from 'react-bulma-components/lib/components/form'
import Button from 'react-bulma-components/lib/components/button'
import Image from 'react-bulma-components/lib/components/image'
import firebase from '../base'

const Form = () => {

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
    const [imagePreview, setImagePreview] = useState('')

    useEffect(() => {
        getInitialUserData()
    }, [])

    const getInitialUserData = () => {
        firebase.getUserData().then((userData) => {
            setQuestion1(userData.question1)
            setQuestion2(userData.question2)
            setQuestion3(userData.question3)
            setAnswear1(userData.answear1)
            setAnswear2(userData.answear2)
            setAnswear3(userData.answear3)
            setBirthday(userData.birthday)
            setPhone(userData.phone)
            setAddress(userData.address)
        }
        ).then(firebase.getUserAvatar().then((userAvatar) => {
            setImagePreview((userAvatar))
        }))
    }

    const handleAvatar = (avatar) => {
        setImagePreview(URL.createObjectURL(avatar))
        setAvatar(avatar)
    }

    const handleUpdate = useCallback(async (event) => {
        event.preventDefault()
        const { address, phone, birthday, question1, answear1, question2, answear2, question3, answear3 } = event.target.elements
        try {
            await firebase.getCurrentUser()
            await firebase.addUserData(address.value, phone.value, birthday.value, question1.value, answear1.value, question2.value, answear2.value, question3.value, answear3.value).then(alert('Profile updated'))
            await firebase.addUserAvatar(avatar)
        } catch (error) {
            alert(error)
        }
    }, [avatar])

    return (
        <form onSubmit={handleUpdate}>
            <Field>
                <Image size={128} className='avatar' alt='user avatar' src={imagePreview ? imagePreview : 'http://bulma.io/images/placeholders/128x128.png'} />
                <InputFile name='avatar' type='file' value={avatar} onChange={e => { handleAvatar(e.target.files[0]) }} />
            </Field>
            <Field>
                <Label htmlFor='address'>Address</Label>
                <Control>
                    <Input type='text' placeholder='Address' name='address' value={address} onChange={e => setAddress(e.target.value)} />
                </Control>
            </Field>
            <Field>
                <Label htmlFor='phone'>Phone number</Label>
                <Control>
                    <Input type='number' placeholder='Phone number' name='phone' value={phone} onChange={e => setPhone(e.target.value)} />
                </Control>
            </Field>
            <Field>
                <Label htmlFor='birthday'>Address</Label>
                <Label>Date of birth</Label>
                <Control>
                    <Input name='birthday' type='date' placeholder='birthday' value={birthday} onChange={e => setBirthday(e.target.value)} />
                </Control>
            </Field>
            <Field>
                <Label htmlFor='question1'>Security question 1</Label>
                <Control>
                    <Input type='text' placeholder='Question 1' name='question1' value={question1} onChange={e => setQuestion1(e.target.value)} />
                </Control>
                <Label htmlFor='answear1'>Security answear 1</Label>
                <Control>
                    <Input type='text' placeholder='Answear 1' name='answear1' value={answear1} onChange={e => setAnswear1(e.target.value)} />
                </Control></Field>
            <Field>
                <Label htmlFor='question2'>Security question 2</Label>
                <Control>
                    <Input type='text' placeholder='Question 2' name='question2' value={question2} onChange={e => setQuestion2(e.target.value)} />
                </Control>
                <Control>
                    <Label htmlFor='answear2'>Security answear 2</Label>
                    <Input type='text' placeholder='Answear 2' name='answear2' value={answear2} onChange={e => setAnswear2(e.target.value)} />

                </Control>
            </Field>
            <Field>
                <Label htmlFor='question3'>Security question 3</Label>
                <Control>
                    <Input type='text' placeholder='Question 3' name='question3' value={question3} onChange={e => setQuestion3(e.target.value)} />
                </Control>
                <Label htmlFor='answear3'>Security answear 3</Label>
                <Control>
                    <Input type='text' placeholder='Answear 3' name='answear3' value={answear3} onChange={e => setAnswear3(e.target.value)} />
                </Control>
            </Field>
            <Field kind='group'>
                <Control>
                    <Button className='is-primary' type='submit'>Update your data</Button>
                </Control>
                <Control>
                    <Link to='/' className='button is-primary is-outlined' color='link'>Cancel</Link>
                </Control>
                <Control>
                    <Button className='is-danger is-outlined' onClick={() => firebase.logout()}>Sign out</Button>
                </Control>
            </Field>
        </form>
    )
}

export default Form
