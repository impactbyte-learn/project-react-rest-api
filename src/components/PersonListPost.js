import React from 'react'
import axios from 'axios'

const API_STRING = `https://jsonplaceholder.typicode.com/users`

export class PersonListPost extends React.Component {
  state = {
    name: '',
    data: undefined
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const user = {
      name: this.state.name
    }

    axios.post(API_STRING, { user }).then(response => {
      this.setState({
        data: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Person Name:</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <button type="submit">Add Person</button>
        </form>

        {this.state.data && (
          <pre>
            <code>{JSON.stringify(this.state.data)}</code>
          </pre>
        )}
      </div>
    )
  }
}
