import React from "react";

import S from "./ImageGalleryItem.module.css";

const ImageGalleryItem = () => {
  return (
    <li className={S.GalleryItem}>
      <img src="" alt="" className={S.Image} />
    </li>
  );
};
export default ImageGalleryItem;
