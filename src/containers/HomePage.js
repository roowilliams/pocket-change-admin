import React, { Component } from 'react'
import { Header } from 'components'
import { Container, Content } from 'components'

export class HomePage extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <h1>This is going to be the home page</h1>
        </Content>
      </Container>
    )
  }
}
