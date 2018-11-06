import React, { Component } from 'react'
import RouteStack from 'routes'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { base } from 'constants/themes'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={base}>
          <RouteStack />
        </ThemeProvider>
        <GlobalStyle />
      </div>
    )
  }
}

export default App;
