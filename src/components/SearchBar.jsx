import React from 'react'
import { Input } from 'semantic-ui-react'


class SearchBar extends React.Component {
    state = {
        query: '',
        onSubmit: this.props.onSubmit
    }

    onSubmit = e => {
        e.preventDefault()
        this.state.onSubmit(this.state.query)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <Input
                    action={{ icon: 'search' }}
                    value={this.state.query}
                    placeholder="Search..."
                    onChange={e => this.setState({ query: e.target.value })}
                />
            </form>
        )
    }
}


export default SearchBar


SearchBar.defaultProps = {
    onSubmit: null
}
