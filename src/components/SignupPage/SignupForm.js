import React, { Component } from 'react'
import { 
    Title2,
    FormContainer,
    TextInput,
    PasswordInput,
    ActionButton
 } from 'components'

 import { auth } from 'api'

export class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state  = {
            email: '',
            password: '',
            confirmPassword: '',
            error: false
        }
    }

    onSubmit = (e) => {
        const { email, password } = this.state
        console.log(auth)
        auth.doCreateUserWithEmailAndPassword(email, password)
        e.preventDefault()
    }
  
    render() {
        const { email, password, confirmPassword, error } = this.state
        const isInvalid =
            password !== confirmPassword ||
            password === '' ||
            email === ''

        return (
            <div>
                <Title2>Sign Up</Title2>
                <FormContainer onSubmit={this.onSubmit}>
                    <TextInput value={email} placeholder="Email" onChange={e => this.setState({email: e.target.value})} />
                    <PasswordInput value={password} placeholder="Password" onChange={e => this.setState({password: e.target.value})} />
                    <PasswordInput value={confirmPassword} placeholder="Confirm password" onChange={e => this.setState({confirmPassword: e.target.value})} />
                    <ActionButton disabled={isInvalid} type="submit">Sign Up</ActionButton>
                    { error && <p>{error.message}</p> }
                </FormContainer>
            </div>
        )
    }
}