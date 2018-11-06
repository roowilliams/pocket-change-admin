import React, { Component } from 'react'
import { Container, Content, Header } from 'components'

export class AddCasePage extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <h1>Add a case</h1>
          <p>
            This will contain a multi-step wizard that a case worker can use to
            add a case to their account.
          </p>
        </Content>
      </Container>
    )
  }
}
