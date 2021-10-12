import React, { Component } from "react";
import { ImSearch } from "react-icons/im";
import S from "./Searchbar.module.css";

export default class Searchbar extends Component {
  render() {
    return (
      <header className={S.Searchbar}>
        <form className={S.SearchForm}>
          <button type="submit" className={S.Button}>
            <ImSearch />
            <span className={S.ButtonLabel}>Search</span>
          </button>

          <input
            className={S.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
