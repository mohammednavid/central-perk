import React, { useState } from "react";
import "./Comments.css";
import "../node_modules/materialize-css/dist/css/materialize.css";
import M from "materialize-css";

function Comments() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".carousel");
    var instances = M.Carousel.init(elems, {
      dragged: true,
    });
  });
  return (
    <div className="comments">
      <h2>Reviews</h2>
      <div className="carousel">
        <a className="carousel-item">
          <h6>Jhon Doe</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam,
            veniam laborum quaerat voluptas dolorem fuga!
          </p>
        </a>
        <a className="carousel-item">
          <h6>Jhon Doe</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam,
            veniam laborum quaerat voluptas dolorem fuga!
          </p>
        </a>
        <a className="carousel-item">
          <h6>Jhon Doe</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam,
            veniam laborum quaerat voluptas dolorem fuga!
          </p>
        </a>
        <a className="carousel-item">
          <h6>Jhon Doe</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam,
            veniam laborum quaerat voluptas dolorem fuga!
          </p>
        </a>
        <a className="carousel-item">
          <h6>Jhon Doe</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nam,
            veniam laborum quaerat voluptas dolorem fuga!
          </p>
        </a>
      </div>
    </div>
  );
}

export default Comments;
