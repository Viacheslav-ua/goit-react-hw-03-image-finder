import React from "react";

import S from "./ImageGallery.module.css";
interface PropsType {
  children: any;
}
const ImageGallery: React.FC = ({ children }) => {
  return <ul className={S.ImageGallery}>{children}</ul>;
};
export default ImageGallery;
