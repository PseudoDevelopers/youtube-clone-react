import React from 'react'
import { Input } from 'semantic-ui-react'


class SearchBar extends React.Component {
    state = { value: '' }

    render() {
        return (
            <Input
                action={{ icon: 'search' }}
                value={this.state.value}
                onChange={e => this.setState({ value: e.target.value })}
                placeholder="Search..."
            />
        )
    }
}

export default SearchBar
