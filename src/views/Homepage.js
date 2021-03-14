import React from 'react'
import { Button } from '@chakra-ui/react'
import logo from '../logo.svg'

export default function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <Button colorScheme="red">Hello</Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}
