import React, { Component } from 'react'
import { 
    Title2,
    FormContainer,
    TextInput,
    ActionButton
 } from 'components'

export class PasswordResetForm extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div>
                <Title2>Reset Password</Title2>
                <FormContainer>
                    <TextInput placeholder="Email" />
                    <ActionButton>Reset Password</ActionButton>
                </FormContainer>
            </div>
        )
    }
}
