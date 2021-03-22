import React, { Component } from 'react';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { cast } = this.props;
    // console.log(`get1:`, cast);

    this.setState({ cast });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const {cast} = this.props;

  //   if (prevState !== cast) {
  //     console.log(`update:`, cast);
  //     // console.log();

  //     this.setState({ cast });
  //   }
  // }

  render() {
    // const { movieId } = this.props.match.params;
    const { cast } = this.props;

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
