import { type } from "os";
import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  keyword: string;
  page: number;
  loading: boolean;
}
class App extends Component {
  state: StateTypes = {
    pictures: [],
    keyword: "",
    page: 1,
    loading: false,
  };

  componentDidMount() {
    console.log('DidMount')
  }

  componentDidUpdate(prevProps: any, prevState: StateTypes) {
    if(prevState.keyword !== this.state.keyword ||
      prevState.page !== this.state.page){
      this.responseAPI(this.state.keyword, this.state.page)
    }
    
  }

  responseAPI = (keyword: string, page: number) => {
    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "22997657-91d4620e666f378f8f41767fa";
    this.setState({ loading: true });
    fetch(
      `${BASE_URL}?q=${keyword}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((res) => this.getPictures(res))
      .finally(() => this.setState({ loading: false }));
  };

  getPictures = (obj: any) => {
    const arrPictures = obj.hits.map((item: Picture) => {
      return {
        id: item.id,
        webformatURL: item.webformatURL,
        largeImageURL: item.largeImageURL,
      };
    });
    
    this.setState((prevState: StateTypes) => ({pictures: [...prevState.pictures, ...arrPictures]}));
    
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  setKeyword = (str: string) => {
    this.setState({
      keyword: str,
      page: 1,
      pictures: [], 
    });
  }

  onLoadMore = () => {
    this.setState((prevState: StateTypes) => ({  page: prevState.page + 1 }));
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.setKeyword}/>
        
        <ImageGallery>
          {this.state.loading && <p>Loading...</p>}
          {this.state.pictures.map((item: Picture) => (
            <ImageGalleryItem key={item.id} webformatURL={item.webformatURL} />
          ))}
          
        </ImageGallery>
        <button type="button" onClick={this.onLoadMore} className="Button">Load more</button>
        <ToastContainer autoClose={3000}/>
      </div>
    );
  }
}

export default App;
