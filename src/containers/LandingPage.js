import React, { Component, Fragment } from 'react'
import {
  Container,
  Content,
  Column,
  SigninForm,
  PasswordResetForm
} from 'components'

export class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: 1
    }
  }

  switchForm = form => {
    this.setState({ form })
  }
  renderForm = form => {
    if (form === 1) {
      return (
        <Fragment>
          <SigninForm />
          <span onClick={() => this.switchForm(2)}>Forgot password?</span>
        </Fragment>
      )
    }
    return (
      <Fragment>
        <PasswordResetForm />
        <span onClick={() => this.switchForm(1)}>Or try to log in again.</span>
      </Fragment>
    )
  }
  render() {
    const { form } = this.state
    return (
      <Container>
        <Content>
          <Column>
            <h1>This is going to be the landing page</h1>
            <p>
              It will feature a screen capture animation of the app imposed
              inside an iPhone showcasing various features, with a CTA to
              download the app from the app store. This will also include a
              signup/login form for caseworkers. We can also include success
              stories and case studies to help conversion to downloads. We will
              connect everything to Google Analytics and test different setups
              to boost conversion.
            </p>
          </Column>
          <Column>{this.renderForm(form)}</Column>
        </Content>
      </Container>
    )
  }
}
