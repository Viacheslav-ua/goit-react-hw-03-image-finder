import React from "react";

import S from "./ImageGalleryItem.module.css";
type Picture = {
  key: number;
  webformatURL: string;
};

const ImageGalleryItem: React.FC<Picture> = ({ webformatURL }) => {
  return (
    <li className={S.GalleryItem}>
      <img src={webformatURL} alt="" className={S.Image} />
    </li>
  );
};
export default ImageGalleryItem;
