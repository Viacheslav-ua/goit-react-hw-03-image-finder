import { type } from "os";
import React, { Component } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem";
import Searchbar from "./components/Searchbar";

type Picture = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
};

interface StateTypes {
  pictures: Picture[];
  loading: boolean;
}
class App extends Component {
  state: StateTypes = {
    pictures: [],
    loading: false,
  };

  componentDidMount() {
    // .then(console.log);
  }

  responseAPI = () => {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "22997657-91d4620e666f378f8f41767fa";
    this.setState({ loading: true });
    fetch(
      `${BASE_URL}?q=s&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      // .then(console.log);
      .then((res) => this.getPictures(res))
      .finally(() => this.setState({ loading: false }));
  };

  getPictures = (obj: any) => {
    const pictures = obj.hits.map((item: Picture) => {
      return {
        id: item.id,
        webformatURL: item.webformatURL,
        largeImageURL: item.largeImageURL,
      };
    });
    this.setState({ pictures: pictures });
  };

  render() {
    return (
      <>
        <Searchbar />
        <button type="button" onClick={this.responseAPI}>
          GETAPI
        </button>
        <ImageGallery>
          {this.state.loading && <p>Loading...</p>}
          {this.state.pictures.map((item: Picture) => (
            <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} />
          ))}
        </ImageGallery>
      </>
    );
  }
}

export default App;
