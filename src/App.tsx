import React, { Component } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Searchbar from "./components/Searchbar";

class App extends Component {
  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery>
          <ImageGalleryItem />
        </ImageGallery>
      </>
    );
  }
}

export default App;
