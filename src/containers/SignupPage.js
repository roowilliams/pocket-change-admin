import React, { Component } from 'react'
import { Container, Content, Column, SignupForm } from 'components'

export class SignupPage extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Column>
            <h1>This is the signup page</h1>
            <p>
              This is where caseworkers will be sent to sign up by the pocket
              change admin for their charity. This will be customized with the
              charity logo and the user will need to enter a code provided in
              the invite to gain access.
            </p>
            <SignupForm />
          </Column>
        </Content>
      </Container>
    )
  }
}
