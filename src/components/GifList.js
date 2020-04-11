import React, { Component } from "react";

class GifList extends Component {
  renderGifs = () => {
    return this.props.gifs.map((gif) => {
      console.log(gif);
      return (
        <li key={gif.id}>
          <img src={gif.url} />
        </li>
      );
    });
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.renderGifs()}
        </ul>
      </div>
    );
  }
}
export default GifList;
