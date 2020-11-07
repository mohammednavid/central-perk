import React from "react";
import "./Gallery.css";
import Fade from "react-reveal/Fade";

const Gallery = () => {
  return (
    <>
      <h2 className="gallery__title">Gallery</h2>
      <div className="gallery">
        <img
          src="https://i.pinimg.com/736x/4c/eb/13/4ceb13d7ee42e3cbfec1f007cca576d9.jpg"
          alt=""
          className="gallery__img"
          id="gallery__imgFirst"
        />
        <Fade className="galleryFirst">
          <img
            src="https://c1.wallpaperflare.com/preview/984/53/201/barista-barista-girl-business-caf%C3%A9.jpg"
            alt=""
            className="gallery__img"
          />
        </Fade>
        <Fade className="galleryFirst">
          <img
            src="https://c0.wallpaperflare.com/preview/579/508/968/coffee-cup-cup-of-coffee-cafe.jpg"
            alt=""
            className="gallery__img"
          />
        </Fade>

        <Fade className="galleryFirst">
          <img
            src="https://assets.rbl.ms/18342169/origin.jpg"
            alt=""
            className="gallery__img"
          />
        </Fade>
        <Fade className="galleryFirst">
          <img
            src="https://c1.wallpaperflare.com/preview/587/55/636/adult-bar-coffee-machine-coffee-shop.jpg"
            alt=""
            className="gallery__img"
          />
        </Fade>
        <Fade className="galleryFirst">
          <img
            src="https://limetray.com/blog/wp-content/uploads/2020/02/jazmin-quaynor-9Y8vxVQN4o4-unsplash-1024x575.jpg"
            alt=""
            className="gallery__img"
          />
        </Fade>

        <Fade className="galleryFirst">
          <img
            src="https://c0.wallpaperflare.com/preview/894/439/695/restaurant-person-human-cafe.jpg"
            alt=""
            className="gallery__img"
            id="gallery__imgLast"
          />
        </Fade>
      </div>
    </>
  );
};
export default Gallery;
