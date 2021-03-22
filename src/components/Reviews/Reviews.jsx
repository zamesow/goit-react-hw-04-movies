import React, { Component } from 'react';

class Cast extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { reviews } = this.props;
    // console.log(this.props);

    this.setState({ reviews });

    if (reviews.length === 0) {
      this.setState({ reviews: ["We don't have any reviews for this movie"] });
    }
  }

  render() {
    // const { reviews } = this.state;
    const { reviews } = this.props;

    console.log(reviews);
    return (
      <>
        <h1>Reviews</h1>

        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
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
