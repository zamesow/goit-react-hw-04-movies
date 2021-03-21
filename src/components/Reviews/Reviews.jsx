import React, { Component } from 'react';

class Cast extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { reviews } = this.props;
    console.log(this.props);
    //  setTimeout(, 300);

    this.setState({ reviews });
  }

  render() {
    // const { reviews } = this.state;
    const { reviews } = this.state;

    console.log(reviews.length);
    return (
      <>
        <h1>Reviews</h1>

        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{`${author}`}</h3>
              <p>{`${content}`}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
// {results.length !== 0 ? (
//           <ul>
//             {results.map(({ id, author }) => (
//               <li key={id}>
//                 <p>{`${author}`}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           'This movie do not have reviews'
//         )}
