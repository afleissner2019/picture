import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {spans: 0}

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans)// successfully download the image/img element and display on the screen then we can get the actual height of the image
  }

  setSpans = ()=>{
      console.log(this.imageRef.current.clientHeight);
      const height = this.imageRef.current.clientHeight

      const spans = Math.ceil(height / 10) //150 is grid-auto-rows: 150px; from ImageList.css
      
      this.setState({spans:spans}) // or only spans

  }
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
