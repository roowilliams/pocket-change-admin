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
        <Title2>Base Details</Title2>
        <FormContainer>
          <TextInput placeholder="First Name" />
          <TextInput placeholder="Last Name" />
          <TextInput placeholder="Birthdate" /> or
          <TextInput placeholder="Age" />
          <TextInput placeholder="Location" />
          <ActionButton>Next</ActionButton>
        </FormContainer>
      </div>
    )
  }
}
