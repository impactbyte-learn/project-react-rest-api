import React from 'react'
import axios from 'axios'

const API_STRING = `https://jsonplaceholder.typicode.com/users`

export class PersonListDelete extends React.Component {
  state = {
    id: '',
    status: undefined,
    data: undefined
  }

  handleChange = event => {
    this.setState({ id: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios.delete(`${API_STRING}/${this.state.id}`).then(response => {
      this.setState({
        status: response.status,
        data: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Person ID:</label>
          <input type="text" name="id" onChange={this.handleChange} />
          <button type="submit">Delete Person</button>
        </form>

        <div>
          <label>Status:</label>
          {this.state.status && (
            <pre>
              <code>{JSON.stringify(this.state.status)}</code>
            </pre>
          )}
        </div>

        <div>
          <label>Response:</label>
          {this.state.data && (
            <pre>
              <code>{JSON.stringify(this.state.data)}</code>
            </pre>
          )}
        </div>
      </div>
    )
  }
}
