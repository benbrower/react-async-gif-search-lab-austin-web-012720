import React, { Component } from 'react';
import GifList from './GifList';

class GifSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            query: ''
         };
    }

    handleSubmit = event => {
        event.prevendDefault();
        this.props.fetchGifs(this.state.query)
      };
    
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
            </form>
          </div>
        
        )        
    }
}
export default GifSearch;