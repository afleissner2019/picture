import React from "react";
import unsplash from "./api/unsplash"; // check during deployment
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

class App extends React.Component {
  state = { images: [] }; // array of object [], or "" string, or null
  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar handleSubmit={this.onSearchSubmit} />
        <ImageList images= {this.state.images}/>
      </div>
    );
  }
}

export default App;
