import React, { Component } from 'react'
import { 
    Title2,
    FormContainer,
    TextInput,
    PasswordInput,
    ActionButton
 } from 'components'

export class SigninForm extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <Title2>Sign In</Title2>
                <FormContainer>
                    <TextInput placeholder="Email" />
                    <PasswordInput placeholder="Password" />
                    <ActionButton>Sign In</ActionButton>
                </FormContainer>
            </div>
        )
    }
}
