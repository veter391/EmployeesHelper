import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    // function works only in this file! 
    onUpdateSearch = (e) => {
        // create values and send to app.js, use the this.props.onUpdateSearch
        const term = e.target.value;
        this.setState({term});
        // the same functions from other file(app.js)
        this.props.onUpdateSearch(term)
    }

    render () {
        return (
            <input 
                type="text" 
                className="form-control search-input" 
                placeholder="Encontrar trabajador"
                onChange={this.onUpdateSearch}/>
        );  
    } 
}

export default SearchPanel;