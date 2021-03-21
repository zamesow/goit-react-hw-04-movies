import React, { Component } from 'react';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { cast } = this.props;
    console.log(this.props.cast);

    this.setState({ cast });
  }

  render() {
    // const { movieId } = this.props.match.params;
    const { cast } = this.state;

    return (
      <>
        <h1>Cast</h1>
        <ul>
          {cast.map(({ id, original_name }) => (
            <li key={id}>
              <p>{original_name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
