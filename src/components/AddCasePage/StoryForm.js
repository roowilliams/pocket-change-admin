import React, { Component } from 'react'
import { Title2, FormContainer, TextInput, ActionButton } from 'components'

export class StoryDetails extends Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    return (
      <div>
        <Title2>Story</Title2>
        <FormContainer>
          <TextInput placeholder="Story..." />
          <ActionButton>Finish</ActionButton>
        </FormContainer>
      </div>
    )
  }
}
