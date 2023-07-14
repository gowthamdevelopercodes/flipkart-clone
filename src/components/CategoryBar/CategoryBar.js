import React from "react";
import "./CategoryBar.css";

const CategoryBar = ({ ImgSrc, categoryName }) => {
  return (
    <div className="CategoryBar">
      <div className="category-Img">
        <img src={ImgSrc} alt="CategoryImg" />
      </div>
      <p className="categoryBar-name">{categoryName}</p>
    </div>
  );
};

export default CategoryBar;
