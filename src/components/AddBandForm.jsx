import React from "react";

class AddBandForm extends React.Component {
  nameRef = React.createRef();
  imageRef = React.createRef();
  albumsRef = React.createRef();
  // console.log(this);

  createBand = event => {
    event.preventDefault();

    // console.log(this.nameRef.current);
    // console.log(this.imageRef.current);
    // console.log(this.albumsRef.current);
    // console.log(this.nameRef.current.value);
    // console.log(this.imageRef.current.value);
    // console.log(this.albumsRef.current.value);
    // console.log(this.albumsRef.value);
    // console.log(this.imageRef.value.value);

    const band = {
      name: this.nameRef.current.value,
      albums: this.albumsRef.current.value,
      image: this.imageRef.current.value
    };

    this.props.addBand(band);

    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="add-band" onSubmit={this.createBand}>
        <h2>Add A Band</h2>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image url"
        />
        <textarea name="albums" ref={this.albumsRef} placeholder="Albums" />
        <button type="submit">Add Band</button>
      </form>
    );
  }
}

export default AddBandForm;
