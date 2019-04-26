import React from 'react'

import { PersonListGet } from './components/PersonListGet'
import { PersonListPost } from './components/PersonListPost'
import { PersonListDelete } from './components/PersonListDelete'
import { GitHubUsers } from './components/GitHubUsers'

class App extends React.Component {
  render() {
    return (
      <div>
        <PersonListGet />
        <hr />
        <PersonListPost />
        <hr />
        <PersonListDelete />
        <hr />
        <GitHubUsers />
      </div>
    )
  }
}

export default App
