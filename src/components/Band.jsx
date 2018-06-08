import React from "react";

class Band extends React.Component {
  render() {
    const { name, albums, image } = this.props.details;

    return (
      <li className="band">
        <h2>{name}</h2>
        <p>{albums}</p>
        <img src={image} alt={name} />
      </li>
    );
  }
}

export default Band;
