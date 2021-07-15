import React from 'react'

class SearchForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = { text: "" }
    }

    onChangeFunction = (event) => {
        this.setState({ text: event.target.value })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        this.props.searchText(this.state.text)
    }

    render() {
        return <div className="ui segment">
            <form onSubmit={this.onSubmitForm} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={this.state.text} onChange={this.onChangeFunction}></input>
                </div>
            </form>
        </div>
    }

}

export default SearchForm;