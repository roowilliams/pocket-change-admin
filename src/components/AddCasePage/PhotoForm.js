import React, { Component } from 'react'
import { Title2, FormContainer, Input, ActionButton } from 'components'

export class Photo extends Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    return (
      <div>
        <Title2>Photo</Title2>
        <FormContainer>
          <Input type="file" />
          <ActionButton>Next</ActionButton>
        </FormContainer>
      </div>
    )
  }
}
